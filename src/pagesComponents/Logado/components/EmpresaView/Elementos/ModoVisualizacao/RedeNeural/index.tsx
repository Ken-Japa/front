import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';
import { DEFAULT_GRAPH_OPTIONS } from './constants/graphOptions';
import { CORES_INDUSTRIAS } from './constants/colors';

import { createCentralNode } from './components/CentralNode';
import { createIndustriaNode } from './components/IndustriaNode';
import { createSegmentoNode } from './components/SegmentoNode';
import { createEmpresaNode } from './components/EmpresaNode';
import { generateSegmentColors, adjustColorHSL } from './utils/graphUtils';
import { GraphContainer, LoadingContainer } from './styled';
import { sumarioService } from './services/sumarioService';

// Import our custom graph component
import dynamic from 'next/dynamic';
const CustomGraph = dynamic(
  () => import('./components/CustomGraph').then(mod => mod.CustomGraph),
  {
    ssr: false,
    loading: () => (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    )
  }
);

interface RedeNeuralProps {
  onLoadingChange?: (loading: boolean) => void;
}

export const RedeNeural: React.FC<RedeNeuralProps> = ({ onLoadingChange }) => {
  const [graphData, setGraphData] = useState<any>({ nodes: [], edges: [] });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        onLoadingChange?.(true);
        const data = await sumarioService.getSumarioData();

        const nodes: any[] = [];
        const edges: any[] = [];

        // Central node
        nodes.push(createCentralNode(data.sumarioTotal.valorMercadoTotalGeral));

        // Calculate max values for sizing
        const maxIndustriaValue = Math.max(...data.sumario.map(ind => ind.valorMercadoTotal));
        const maxSegmentoValue = Math.max(...data.sumario.flatMap(ind =>
          ind.segmentos.map(seg => seg.valorMercado)
        ));
        const maxEmpresaValue = Math.max(...data.sumario.flatMap(ind =>
          ind.segmentos.flatMap(seg =>
            seg.empresasDetalhes.map(emp => emp.valorMercado)
          )
        ));

        // Industry nodes - First level
        const industriaRadius = 1200;
        data.sumario.forEach((industria, index, array) => {
          const industriaAngle = (2 * Math.PI * index) / array.length;
          const industriaSector = (2 * Math.PI) / array.length;
          const corIndustria = adjustColorHSL(CORES_INDUSTRIAS[index % CORES_INDUSTRIAS.length], {
            s: 0.15,
            l: 0.05
          });

          const industriaNode = createIndustriaNode(
            industria,
            index,
            array,
            maxIndustriaValue,
            corIndustria,
            industriaRadius
          );
          nodes.push(industriaNode);

          edges.push({
            from: 'Mercado Total',
            to: industriaNode.id,
            color: { color: corIndustria, opacity: 0.9, highlight: '#FFFFFF' },
            width: 3,
            smooth: { enabled: true, type: 'curvedCW', roundness: 0.1 },
            physics: false
          });

          // Segment nodes - Second level
          const segmentRadius = industriaRadius + 2000;
          const segmentColors = generateSegmentColors(corIndustria, industria.segmentos.length);

          industria.segmentos.forEach((segmento, segIndex, segArray) => {
            const segmentoNode = createSegmentoNode(
              segmento,
              segIndex,
              segArray,
              maxSegmentoValue,
              segmentColors[segIndex],
              segmentRadius,
              industriaAngle,
              industriaSector
            );
            nodes.push(segmentoNode);

            edges.push({
              from: industriaNode.id,
              to: segmentoNode.id,
              color: { color: segmentColors[segIndex], opacity: 0.5, highlight: '#FFFFFF' },
              width: 2
            });

            // Company nodes - Third level
            const empresaRadius = segmentRadius + 3000;
            segmento.empresasDetalhes.forEach((empresa, empIndex, empArray) => {
              const empresaNode = createEmpresaNode(
                empresa,
                empIndex,
                empArray,
                maxEmpresaValue,
                segmentColors[segIndex],
                empresaRadius,
                industriaAngle,
                industriaSector / segArray.length
              );
              nodes.push(empresaNode);

              edges.push({
                from: segmentoNode.id,
                to: empresaNode.id,
                color: { color: empresaNode.color.background, opacity: 0.4, highlight: '#FFFFFF' },
                width: 1
              });
            });
          });
        });

        setGraphData({ nodes, edges });
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
        setError('Falha ao carregar os dados do gráfico');
      }
      finally {
        setIsLoading(false);
        onLoadingChange?.(false);
      }
    };

    fetchData();
  }, [onLoadingChange]);

  if (isLoading) {
    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    );
  }

  if (error) {
    return <Box sx={{ p: 2 }}><Typography color="error">{error}</Typography></Box>;
  }

  return (
    <GraphContainer>
      {graphData.nodes.length > 0 && (
        <CustomGraph
          graph={graphData}
          options={DEFAULT_GRAPH_OPTIONS}
          events={{
            doubleClick: (params) => {
              if (params.nodes && params.nodes.length > 0) {
                const nodeId = params.nodes[0];
                const node = graphData.nodes.find((n: any) => n.id === nodeId);

                if (node && nodeId.startsWith('empresa-')) {
                  if (node.url) {
                    router.push(node.url);
                  }
                }
              }
            }
          }}
        />
      )}
    </GraphContainer>
  );
};