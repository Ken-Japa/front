import { MetricCategory } from "../types/types";

export const metricCategories = (metrics: any): MetricCategory[] => [
  {
    title: "Valor de Mercado",
    metrics: [
      {
        title: "Market Cap",
        ...metrics.marketCap,
        formula: "Preço da Ação × Quantidade de Ações",
        description: "Valor total de mercado da empresa",
        type: "currency",
      },
      {
        title: "Enterprise Value (EV)",
        ...metrics.enterpriseValue,
        formula: "Market Cap + Dívida Líquida - Caixa",
        description: "Valor total da empresa considerando dívida e caixa",
        type: "currency",
      },
    ],
  },
  {
    title: "Valuation",
    metrics: [
      {
        title: "P/L (Preço/Lucro)",
        ...metrics.precoLucro,
        formula: "Preço da Ação / (Lucro Líquido por Ação)",
        description:
          "Indica quantos anos seriam necessários para o investidor recuperar o investimento através dos lucros da empresa",
        type: "multiplier",
      },
      {
        title: "EV/EBITDA",
        ...metrics.evEbitda,
        formula: "(Market Cap + Dívida Líquida - Caixa) / EBITDA",
        description:
          "Indica quanto tempo a empresa levaria para pagar seu próprio valor considerando sua geração de caixa",
        type: "multiplier",
      },
      {
        title: "P/VP (Preço/Valor Patrimonial)",
        ...metrics.precoValorPatrimonial,
        formula: "Preço da Ação / (Patrimônio Líquido / Ações)",
        description:
          "Relação entre o preço de mercado e o valor contábil da empresa",
        type: "multiplier",
      },
    ],
  },
  {
    title: "Lucratividade",
    metrics: [
      {
        title: "Margem Líquida",
        ...metrics.margemLiquida,
        formula: "(Lucro Líquido / Receita Líquida) × 100",
        description: "Percentual de lucro em relação à receita",
        type: "percentage",
      },
      {
        title: "Margem Bruta",
        ...metrics.margemBruta,
        formula: "((Receita Líquida - CPV) / Receita Líquida) × 100",
        description: "Percentual de lucro bruto em relação à receita líquida",
        type: "percentage",
      },
    ],
  },
  {
    title: "Retorno",
    metrics: [
      {
        title: "ROE (Retorno sobre Patrimônio)",
        ...metrics.roe,
        formula: "(Lucro Líquido / Patrimônio Líquido) × 100",
        description:
          "Mede a eficiência da empresa em gerar lucro a partir do capital dos acionistas",
        type: "percentage",
      },
      {
        title: "ROIC (Retorno sobre Capital Investido)",
        ...metrics.roic,
        formula:
          "(EBIT × (1 - Taxa IR)) / (Dívida Líquida + Patrimônio Líquido) × 100",
        description:
          "Avalia a eficiência da empresa em gerar retorno sobre o capital total investido",
        type: "percentage",
      },
    ],
  },
  {
    title: "Endividamento",
    metrics: [
      {
        title: "Dívida Líquida/EBITDA",
        ...metrics.dividaLiquidaEbitda,
        formula: "Dívida Líquida / EBITDA",
        description:
          "Indica quantos anos de geração de caixa seriam necessários para pagar a dívida líquida",
        type: "multiplier",
      },
    ],
  },
  {
    title: "Dividendos",
    metrics: [
      {
        title: "Dividend Yield",
        ...metrics.dividendYield,
        formula: "(Dividendos Pagos / (Preço da Ação × Ações)) × 100",
        description:
          "Percentual de retorno em dividendos em relação ao preço da ação",
        type: "percentage",
      },
    ],
  },
];
