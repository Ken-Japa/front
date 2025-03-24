import React, { useEffect, useState } from 'react';
import Graph, { GraphData } from 'react-graph-vis';
import { formatCurrency } from '@/pagesComponents/Logado/components/EmpresaView/Elementos/ModoVisualizacao/RedeNeural/utils/currency';
import './styles.css';

interface EmpresaNode {
  empresa: string;
  valorMercado: number;
  participacao: number;
}

interface SegmentoNode {
  segmento: string;
  valorMercado: number;
  empresas: number;
  participacao: number;
  empresasDetalhes: EmpresaNode[];
}

interface IndustriaNode {
  industria: string;
  valorMercadoTotal: number;
  participacao: number;
  qtdSegmentos: number;
  empresas: number;
  segmentos: SegmentoNode[];
}

interface SumarioData {
  sumarioTotal: {
    valorMercadoTotalGeral: number;
    qtdIndustriasTotal: number;
    qtdEmpresasTotal: number;
    qtdSegmentosTotal: number;
    industrias: string[];
  };
  sumario: IndustriaNode[];
}

const CORES_INDUSTRIAS = [
  '#4E79A7', // Blue
  '#F28E2B', // Orange
  '#E15759', // Red
  '#76B7B2', // Teal
  '#59A14F', // Green
  '#EDC948', // Yellow
  '#B07AA1', // Purple
  '#FF9DA7', // Pink
  '#9C755F', // Brown
  '#BAB0AC', // Gray
  '#D37295'  // Rose
];

const calculatePosition = (index: number, total: number, radius: number, parentAngle: number, sectorAngle: number) => {
  // Calculate position within the allowed sector
  const angleStep = sectorAngle / Math.max(total, 1);
  const angle = parentAngle - (sectorAngle / 2) + (angleStep * (index + 0.5));
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle)
  };
};

const calculateNodeSize = (value: number, baseSize: number, maxValue: number) => {
  const minSize = baseSize * 0.2;
  const maxSize = baseSize * 1.6;
  return minSize + ((value / maxValue) * (maxSize - minSize));
};

export const RedeNeural: React.FC = () => {
  const [graphData, setGraphData] = useState<GraphData>({ nodes: [], edges: [] });
  const options = {
    nodes: {
      fixed: false,  // Fix nodes in their calculated positions
      shape: 'dot',
      borderWidth: 3,
      shadow: true,
      font: {
        color: '#FFFFFF',
        strokeWidth: 3,
        strokeColor: '#000000'
      }
    },
    edges: {
      smooth: {
        enabled: true,
        type: 'curvedCW',
        roundness: 0.2
      }
    },
    physics: {
      enabled: true  // Disable physics for precise positioning
    },
    interaction: {
      dragNodes: true,  // Prevent node dragging to maintain layout
      dragView: true,
      zoomView: true
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await import('@/pagesComponents/Logado/components/EmpresaView/mockdata_example/sumario.json');
        const data: SumarioData = response.default;

        const nodes: any[] = [];
        const edges: any[] = [];

        // Central node
        nodes.push({
          id: 'Mercado Total',
          label: `Mercado Total\n${formatCurrency(data.sumarioTotal.valorMercadoTotalGeral)}`,
          x: 0,
          y: 0,
          size: 80,
          font: { size: 24, bold: true },
          color: {
            background: '#FFFFFF',
            border: '#000000',
            highlight: { background: '#FFFFFF', border: '#000000' }
          },
          borderWidth: 4
        });

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
          const industriaPosition = calculatePosition(
            index,
            array.length,
            industriaRadius,
            industriaAngle,
            industriaSector
          );

          const corIndustria = CORES_INDUSTRIAS[index % CORES_INDUSTRIAS.length];
          const industriaId = `industria-${industria.industria}`;

          nodes.push({
            id: industriaId,
            label: `${industria.industria}\n${formatCurrency(industria.valorMercadoTotal)}`,
            x: industriaPosition.x,
            y: industriaPosition.y,
            size: calculateNodeSize(industria.valorMercadoTotal, 60, maxIndustriaValue), // Ajuste do tamanho relativo
            font: { size: 18, bold: true },
            color: {
              background: corIndustria,
              border: corIndustria,
              highlight: { background: corIndustria, border: '#FFFFFF' }
            }
          });

          // Segment nodes - Second level
          const segmentRadius = industriaRadius + 2000; // Aumentado o espaçamento
          industria.segmentos.forEach((segmento, segIndex, segArray) => {
            const segmentSector = (industriaSector); // Reduzido para evitar sobreposição
            const segmentAngle = industriaAngle - (industriaSector * 0.2) +
              (industriaSector * 0.8 * (segIndex / (segArray.length - 1 || 1))); // Melhor distribuição

            const segmentPosition = calculatePosition(
              segIndex,
              segArray.length,
              segmentRadius,
              segmentAngle,
              segmentSector / segArray.length // Setor individual para cada segmento
            );

            const segmentoId = `segmento-${segmento.segmento}-${segIndex}`;
            const segmentColor = adjustColor(corIndustria, -20);

            nodes.push({
              id: segmentoId,
              label: `${segmento.segmento}\n${formatCurrency(segmento.valorMercado)}`,
              x: segmentPosition.x,
              y: segmentPosition.y,
              size: calculateNodeSize(segmento.valorMercado, 40, maxSegmentoValue),
              font: { size: 16 },
              color: {
                background: segmentColor,
                border: corIndustria,
                highlight: { background: segmentColor, border: '#FFFFFF' }
              }
            });

            edges.push({
              from: industriaId,
              to: segmentoId,
              color: { color: segmentColor, opacity: 0.5 },
              width: 2
            });

            // Company nodes - Third level
            const empresaRadius = segmentRadius + 3000; // Aumentado espaçamento
            segmento.empresasDetalhes.forEach((empresa, empIndex, empArray) => {
              const empresaSector = segmentSector / segArray.length; // Setor específico para empresas do segmento
              const empresaAngle = segmentAngle - (empresaSector * 0.4) +
                (empresaSector * (empIndex / (empArray.length - 1 || 1)));

              const empresaPosition = calculatePosition(
                empIndex,
                empArray.length,
                empresaRadius,
                empresaAngle,
                empresaSector  // Reduzido para evitar sobreposição
              );

              const empresaId = `empresa-${empresa.empresa}-${empIndex}`;
              const empresaColor = adjustColor(corIndustria, -40);

              nodes.push({
                id: empresaId,
                label: `${empresa.empresa}\n${formatCurrency(empresa.valorMercado)}`,
                x: empresaPosition.x,
                y: empresaPosition.y,
                size: calculateNodeSize(empresa.valorMercado, 25, maxEmpresaValue),
                font: { size: 14 },
                color: {
                  background: empresaColor,
                  border: segmentColor,
                  highlight: { background: empresaColor, border: '#FFFFFF' }
                }
              });

              edges.push({
                from: segmentoId,
                to: empresaId,
                color: { color: empresaColor, opacity: 0.4 },
                width: 1
              });
            });
          });
        });

        setGraphData({ nodes, edges });
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="graph-container">
      {graphData.nodes.length > 0 && (
        <Graph
          graph={graphData}
          options={options}
          events={{
            select: ({ nodes, edges }: { nodes: string[]; edges: string[] }) => {
              console.log('Selected nodes:', nodes);
              console.log('Selected edges:', edges);
            }
          }}
        />
      )}
    </div>
  );
};

// Helper function to adjust color brightness
const adjustColor = (color: string, amount: number): string => {
  const hex = color.replace('#', '');
  const num = parseInt(hex, 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
  const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
};