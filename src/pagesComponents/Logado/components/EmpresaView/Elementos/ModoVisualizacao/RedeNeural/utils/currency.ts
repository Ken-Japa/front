export const formatCurrency = (value: number): string => {
  if (value >= 1e9) {
    return `R$ ${(value / 1e9).toFixed(1)} Bi`.replace('.', ',');
  }
  return `R$ ${(value / 1e6).toFixed(1)} Mi`.replace('.', ',');
};