import { IndustriaNode } from '../types';
import { calculatePosition, calculateNodeSize, adjustColorHSL } from '../utils/graphUtils';
import { formatCurrency } from '../../utils/currency';

export const createIndustriaNode = (
    industria: IndustriaNode,
    index: number,
    array: IndustriaNode[],
    maxValue: number,
    corIndustria: string,
    radius: number
) => {
    const industriaAngle = (2 * Math.PI * index) / array.length;
    const industriaSector = (2 * Math.PI) / array.length;
    const position = calculatePosition(index, array.length, radius, industriaAngle, industriaSector);

    return {
        id: `industria-${industria.industria}`,
        label: `${industria.industria}\n${formatCurrency(industria.valorMercadoTotal)}`,
        x: position.x,
        y: position.y,
        size: calculateNodeSize(industria.valorMercadoTotal, 60, maxValue),
        font: { size: 18, bold: true },
        color: {
            background: corIndustria,
            border: adjustColorHSL(corIndustria, { l: -0.3 }),
            highlight: { background: corIndustria, border: '#FFFFFF' }
        },
        borderWidth: 3
    };
};