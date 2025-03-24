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

const adjustColorHSL = (color: string, adjustments: { h?: number; s?: number; l?: number }) => {
  // Converte hex para RGB
  const hex = color.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;

  // RGB para HSL
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  let l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  // Ajusta HSL
  h = ((h * 360 + (adjustments.h || 0)) % 360) / 360;
  s = Math.min(1, Math.max(0, s + (adjustments.s || 0)));
  l = Math.min(1, Math.max(0, l + (adjustments.l || 0)));

  // HSL para RGB
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  let r1, g1, b1;
  if (s === 0) {
    r1 = g1 = b1 = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r1 = hue2rgb(p, q, h + 1 / 3);
    g1 = hue2rgb(p, q, h);
    b1 = hue2rgb(p, q, h - 1 / 3);
  }

  // RGB para Hex
  const toHex = (x: number) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r1)}${toHex(g1)}${toHex(b1)}`;
};

const generateSegmentColors = (baseColor: string, count: number): string[] => {
  const colors: string[] = [];
  for (let i = 0; i < count; i++) {
    colors.push(adjustColorHSL(baseColor, {
      h: (i * 5) - 2,  // Wider hue variation
      s: 0.05,            // Slightly more saturated
      l: -0.01 + (i * 0.02)  // Prevent colors from getting too dark
    }));
  }
  return colors;
};

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
  const minSize = baseSize * 0.4;
  const maxSize = baseSize * 1.1;
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
      enabled: true,
      stabilization: {
        enabled: true,
        iterations: 1000,
        updateInterval: 10
      },
      repulsion: {
        centralGravity: 0.0,
        springLength: 300,
        springConstant: 0.05,
        nodeDistance: 500,
        damping: 0.09
      },
      solver: 'repulsion'
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
          borderWidth: 2
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

          const corIndustria = adjustColorHSL(CORES_INDUSTRIAS[index % CORES_INDUSTRIAS.length], {
            s: 0.15,    // More saturated industry colors
            l: 0.05    // Brighter industry colors
          });
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
              border: adjustColorHSL(corIndustria, { l: -0.3 }),
              highlight: { background: corIndustria, border: '#FFFFFF' }
            },
            borderWidth: 3
          });

          // Segment nodes - Second level
          const segmentRadius = industriaRadius + 2000; // Aumentado o espaçamento
          const segmentColors = generateSegmentColors(corIndustria, industria.segmentos.length);
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
            const segmentColor = segmentColors[segIndex];

            nodes.push({
              id: segmentoId,
              label: `${segmento.segmento}\n${formatCurrency(segmento.valorMercado)}`,
              x: segmentPosition.x,
              y: segmentPosition.y,
              size: calculateNodeSize(segmento.valorMercado, 40, maxSegmentoValue),
              font: { size: 16 },
              color: {
                background: segmentColor,
                border: segmentColor,  // Changed from corIndustria to segmentColor
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
              const empresaColor = adjustColorHSL(segmentColor, {
                s: 0.1,     // Slightly more saturated
                l: -0.1    // Significantly darker than segment
              });
              nodes.push({
                id: empresaId,
                label: `${empresa.empresa}\n${formatCurrency(empresa.valorMercado)}`,
                x: empresaPosition.x,
                y: empresaPosition.y,
                size: calculateNodeSize(empresa.valorMercado, 25, maxEmpresaValue),
                font: { size: 14 },
                color: {
                  background: empresaColor,
                  border: empresaColor,  // Changed from segmentColor to empresaColor
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