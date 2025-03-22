export interface ValuationSectionProps {
    fluxoCaixaOperacional: number;
    fluxoCaixaLivre: number;
    precoAcao: number;
    acoesCirculacao: number;
    dividaLiquida: number;
    ebitda: number;
    lucroLiquido: number;
    patrimonioLiquido: number;
    caixaEquivalentes: number;
}

export interface HistoricalFCF {
    year: number;
    value: number | null;
}

export interface ValuationInputs {
    wacc: number;
    crescimentoTerminal: number;
    crescimentoProjecao: number;
}

export interface ValuationResults {
    precoJusto: number;
    enterpriseValue: number;
    equityValue: number;
    subvalorizacao: number;
    evEbitda: number;
    pl: number;
}

export interface ScenarioInputs {
    wacc: number;
    crescimentoTerminal: number;
    crescimentoProjecao: number;
}

export interface SensitivityResults {
    base: ValuationResults;
    otimista: ValuationResults;
    pessimista: ValuationResults;
}