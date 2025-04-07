import { PeriodType } from "../components/PeriodSelector";

export const filterDataByPeriod = (data: any[], period: PeriodType) => {
  if (!data || data.length === 0) {
    console.warn("Nenhum dado para filtrar");
    return [];
  }

  const today = new Date();
  let startDate = new Date();

  switch (period) {
    case "1M":
      startDate.setMonth(today.getMonth() - 1);
      break;
    case "6M":
      startDate.setMonth(today.getMonth() - 6);
      break;
    case "1A":
      startDate.setFullYear(today.getFullYear() - 1);
      break;
    case "5A":
      startDate.setFullYear(today.getFullYear() - 5);
      break;
    case "MAX":
      return data;
    default:
      startDate.setFullYear(today.getFullYear() - 1);
  }

  const filteredData = data.filter((item) => {
    try {
      const itemDate = new Date(item.data);
      return itemDate >= startDate;
    } catch (e) {
      console.error("Erro ao converter data:", item.data, e);
      return false;
    }
  });

  return filteredData;
};
