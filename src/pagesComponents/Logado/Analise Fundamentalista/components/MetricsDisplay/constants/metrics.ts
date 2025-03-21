import { DadosAnaliseFundamental } from "../../../types";
import { checkMissingFields } from "../utils/utils";

export const calculateMetrics = (
  data: DadosAnaliseFundamental,
  getFieldLabel: (field: keyof DadosAnaliseFundamental) => string
) => {
  const calculateMetric = (
    requiredFields: Array<keyof DadosAnaliseFundamental>,
    calculation: () => number
  ) => {
    const missingFields = checkMissingFields(
      data,
      requiredFields,
      getFieldLabel
    );
    if (missingFields.length > 0) return { value: 0, missingFields };
    return { value: calculation(), missingFields: [] };
  };

  return {
    marketCap: calculateMetric(
      ["precoAcao", "acoesCirculacao"],
      () => (data.precoAcao * data.acoesCirculacao) / 1000
    ),
    enterpriseValue: calculateMetric(
      ["precoAcao", "acoesCirculacao", "dividaLiquida", "caixaEquivalentes"],
      () => {
        const marketCap = (data.precoAcao * data.acoesCirculacao) / 1000;
        return marketCap + data.dividaLiquida - data.caixaEquivalentes;
      }
    ),
    precoLucro: calculateMetric(
      ["precoAcao", "lucroLiquido", "acoesCirculacao"],
      () => {
        const lucroLiquidoPorAcao =
          (data.lucroLiquido * 1000) / data.acoesCirculacao;
        return data.precoAcao / lucroLiquidoPorAcao;
      }
    ),
    evEbitda: calculateMetric(
      [
        "precoAcao",
        "acoesCirculacao",
        "dividaLiquida",
        "ebitda",
        "caixaEquivalentes",
      ],
      () => {
        const marketCap = (data.precoAcao * data.acoesCirculacao) / 1000;
        const enterpriseValue =
          marketCap + data.dividaLiquida - data.caixaEquivalentes;
        return enterpriseValue / data.ebitda;
      }
    ),
    precoValorPatrimonial: calculateMetric(
      ["precoAcao", "patrimonioLiquido", "acoesCirculacao"],
      () => {
        const valorPatrimonialPorAcao =
          (data.patrimonioLiquido * 1000) / data.acoesCirculacao;
        return data.precoAcao / valorPatrimonialPorAcao;
      }
    ),
    margemLiquida: calculateMetric(
      ["lucroLiquido", "receitaLiquida"],
      () => (data.lucroLiquido / data.receitaLiquida) * 100
    ),
    margemBruta: calculateMetric(
      ["receitaLiquida", "custoProdutos"],
      () => ((data.receitaLiquida - data.custoProdutos) / data.receitaLiquida) * 100
    ),
    roe: calculateMetric(
      ["lucroLiquido", "patrimonioLiquido"],
      () => (data.lucroLiquido / data.patrimonioLiquido) * 100
    ),
    roic: calculateMetric(
      ["ebit", "impostoRenda", "dividaLiquida", "patrimonioLiquido"],
      () => {
        const taxRate = data.impostoRenda / data.ebit;
        const capitalInvestido = data.dividaLiquida + data.patrimonioLiquido;
        return ((data.ebit * (1 - taxRate)) / capitalInvestido) * 100;
      }
    ),
    dividaLiquidaEbitda: calculateMetric(
      ["dividaLiquida", "ebitda"],
      () => data.dividaLiquida / data.ebitda
    ),
    dividendYield: calculateMetric(
      ["dividendosPagos", "precoAcao", "acoesCirculacao"],
      () => {
        const marketCap = (data.precoAcao * data.acoesCirculacao) / 1000;
        return (data.dividendosPagos / marketCap) * 100;
      }
    ),
  };
};
