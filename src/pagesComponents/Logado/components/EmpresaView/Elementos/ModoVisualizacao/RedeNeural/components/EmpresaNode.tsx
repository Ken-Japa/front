import { EmpresaNode } from '../types';
import { calculatePosition, calculateNodeSize, adjustColorHSL } from '../utils/graphUtils';
import { formatCurrency } from '../../utils/currency';


export const createEmpresaNode = (
    empresa: EmpresaNode,
    empIndex: number,
    empArray: EmpresaNode[],
    maxValue: number,
    segmentColor: string,
    radius: number,
    segmentAngle: number,
    empresaSector: number
) => {
    const empresaAngle = segmentAngle - (empresaSector * 0.4) +
        (empresaSector * (empIndex / (empArray.length - 1 || 1)));

    const position = calculatePosition(
        empIndex,
        empArray.length,
        radius,
        empresaAngle,
        empresaSector
    );

    const empresaColor = adjustColorHSL(segmentColor, {
        s: 0.1,
        l: -0.1
    });

    return {
        id: `empresa-${empresa.empresa}-${empIndex}`,
        label: `${empresa.empresa}\n${formatCurrency(empresa.valorMercado)}`,
        x: position.x,
        y: position.y,
        size: calculateNodeSize(empresa.valorMercado, 25, maxValue),
        font: { size: 14 },
        color: {
            background: empresaColor,
            border: empresaColor,
            highlight: { background: empresaColor, border: '#FFFFFF' }
        }
    };
};