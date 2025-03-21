export const FORM_SECTIONS = [
  {
    title: "Dados Básicos da Empresa",
    description: "Informações fundamentais sobre a empresa e suas ações",
    fields: [
      {
        name: "precoAcao",
        label: "Preço da Ação",
        tooltip: "Último preço de fechamento da ação",
      },
      {
        name: "acoesCirculacao",
        label: "Ações em Circulação",
        tooltip:
          "Número total de ações disponíveis no mercado (excluindo ações em tesouraria)",
      },
    ],
  },
  {
    title: "Demonstração de Resultados (DRE)",
    description: "Dados do demonstrativo de resultados da empresa",
    fields: [
      {
        name: "receitaLiquida",
        label: "Receita Líquida",
        tooltip:
          "Receita total após deduções: 'Receita Líquida' ou 'Vendas Líquidas'. Não use Receita Bruta",
      },
      {
        name: "custoProdutos",
        label: "Custo dos Produtos Vendidos",
        tooltip:
          "Custos diretos associados à produção: 'Custo dos Produtos Vendidos' ou 'Custo das Vendas'",
      },
      {
        name: "ebitda",
        label: "EBITDA",
        tooltip:
          "Lucro antes de juros, impostos, depreciação e amortização (ajustado ou reportado pela empresa). DRE (seção de Resultados Operacionais) ou em Métricas Não-IFRS.",
      },
      {
        name: "ebit",
        label: "EBIT",
        tooltip:
          "Lucro operacional (inclui depreciação e amortização). DRE, 'Lucro Operacional' ou 'Resultado Antes do Resultado Financeiro' ou calcule: EBIT = EBITDA - Depreciação, Depleção e Amortização",
      },
      {
        name: "lucroLiquido",
        label: "Lucro Líquido",
        tooltip: "Lucro final após todas as deduções. Não use Lucro Bruto",
      },
      {
        name: "impostoRenda",
        label: "Imposto de Renda",
        tooltip:
          "Total de impostos sobre o lucro. Ache 'Imposto de renda e contribuição social'",
      },
    ],
  },
  {
    title: "Balanço Patrimonial",
    description: "Dados do balanço patrimonial da empresa",
    fields: [
      {
        name: "patrimonioLiquido",
        label: "Patrimônio Líquido",
        tooltip: "Valor total dos ativos menos as obrigações",
      },
      {
        name: "dividaLiquida",
        label: "Dívida Líquida",
        tooltip:
          "Total de dívidas menos o caixa disponível. Seção de Endividamento. Não confunda com Dívida Bruta",
      },
      {
        name: "caixaEquivalentes",
        label: "Caixa e Equivalentes",
        tooltip:
          "Dinheiro disponível e investimentos de alta liquidez. Do fim do período. Pode estar como 'Disponibilidades ajustadas'",
      },
    ],
  },
  {
    title: "Dividendos",
    description: "Informações sobre distribuição de dividendos",
    fields: [
      {
        name: "dividendosPagos",
        label: "Dividendos Pagos",
        tooltip:
          "Total de dividendos distribuídos no período. Demonstração do Fluxo de Caixa (DFC), seção 'Atividades de Financiamento'. Diferente de Dividendos Propostos",
      },
    ],
  },
] as const;
