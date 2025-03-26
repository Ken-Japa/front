import React, { useEffect, useState } from 'react';
import Graph, { GraphData } from 'react-graph-vis';
import { Box } from '@mui/material';
import { DEFAULT_GRAPH_OPTIONS } from './constants/graphOptions';
import { CORES_INDUSTRIAS } from './constants/colors';

import { createCentralNode } from './components/CentralNode';
import { createIndustriaNode } from './components/IndustriaNode';
import { createSegmentoNode } from './components/SegmentoNode';
import { createEmpresaNode } from './components/EmpresaNode';

import { generateSegmentColors, adjustColorHSL } from './utils/graphUtils';
import { GraphContainer } from './styled';
import { sumarioService } from './services/sumarioService';

interface RedeNeuralProps {
  onLoadingChange?: (loading: boolean) => void;
}
export const RedeNeural: React.FC<RedeNeuralProps> = ({ onLoadingChange }) => {
  const [graphData, setGraphData] = useState<GraphData>({ nodes: [], edges: [] });
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
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
        console.error('Error loading data:', error);
        setError('Failed to load graph data');
      }
      finally {
        onLoadingChange?.(false);
      }
    };

    fetchData();
  }, [onLoadingChange]);

  if (error) {
    return <Box sx={{ p: 2 }}>{error}</Box>;
  }

  return (
    <GraphContainer>
      {graphData.nodes.length > 0 && (
        <Graph
          graph={graphData}
          options={DEFAULT_GRAPH_OPTIONS}
          events={{
            select: ({ nodes, edges }) => {
              console.log('Selected nodes:', nodes);
              console.log('Selected edges:', edges);
            }
          }}
        />
      )}
    </GraphContainer>
  );
};