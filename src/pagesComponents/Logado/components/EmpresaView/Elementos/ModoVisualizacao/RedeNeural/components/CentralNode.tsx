import { formatCurrency } from '../../utils/currency';

export const createCentralNode = (valorTotal: number) => ({
  id: 'Mercado Total',
  label: `Mercado Total\n${formatCurrency(valorTotal)}`,
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