export interface DadosAnaliseFundamental {
  // Dados Básicos da Empresa
  precoAcao: number; // Preço da Ação
  acoesCirculacao: number; // Número de Ações em Circulação

  // Demonstração de Resultados (DRE)
  receitaLiquida: number; // Receita Líquida
  custoProdutos: number; // Custo dos Produtos Vendidos (CPV)
  ebitda: number; // EBITDA
  ebit: number; // EBIT
  lucroLiquido: number; // Lucro Líquido
  impostoRenda: number; // Imposto de Renda

  // Balanço Patrimonial
  patrimonioLiquido: number; // Patrimônio Líquido
  dividaLiquida: number; // Dívida Líquida
  caixaEquivalentes: number; // Caixa e Equivalentes

  // Outros Dados Relevantes
  dividendosPagos: number; // Dividendos Pagos

  fluxoCaixaOperacional: number; // Fluxo de Caixa Operacional
  capex: number; // CAPEX (Capital Expenditure)
  fluxoCaixaLivre: number; // Fluxo de Caixa Livre (FCO - CAPEX)
}

export interface MetricasCalculadas {
  precoLucro: number; // P/L
  evEbitda: number; // EV/EBITDA
  margemLiquida: number; // Margem Líquida
  roe: number; // ROE
  roic: number; // ROIC
  dividaLiquidaEbitda: number; // Dívida Líquida/EBITDA
  dividendYield: number; // Dividend Yield
  precoValorPatrimonial: number; // P/VPA
  margemBruta: number; // Margem Bruta
  liquidezCorrente: number; // Liquidez Corrente
  payoutRatio: number; // Índice de Distribuição de Dividendos
  evReceita: number; // EV/Receita
  margemOperacional: number; // Margem Operacional
  margemFCO: number; // Margem do Fluxo de Caixa Operacional
  coberturaCapex: number; // Cobertura de CAPEX pelo FCO
  margemFCL: number; // Margem do Fluxo de Caixa Livre
}
