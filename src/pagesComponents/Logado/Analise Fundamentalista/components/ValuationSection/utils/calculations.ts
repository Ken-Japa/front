import { HistoricalFCF, ScenarioInputs, ValuationResults } from '../types';

export const calculateGrowthRate = (
    historicalData: HistoricalFCF[],
    defaultRate: number
): number => {
    const validData = historicalData.filter(item => item.value !== null);
    if (validData.length >= 2) {
        const sorted = [...validData].sort((a, b) => a.year - b.year);
        const initial = sorted[0].value as number;
        const final = sorted[sorted.length - 1].value as number;
        const years = sorted.length - 1;
        const cagr = (Math.pow(final / initial, 1 / years) - 1) * 100;

        const yearlyGrowth = sorted.slice(1).map((curr, index) => {
            const prev = sorted[index];
            return ((curr.value as number) / (prev.value as number) - 1) * 100;
        });
        const avgGrowth = yearlyGrowth.reduce((sum, rate) => sum + rate, 0) / yearlyGrowth.length;

        return Math.min(cagr, avgGrowth);
    }
    return defaultRate;
};

export const calculateScenario = (
    inputs: ScenarioInputs,
    fcl: number,
    dividaLiquida: number,
    caixaEquivalentes: number,
    acoesCirculacao: number,
    precoAcao: number,
    ebitda: number,
    lucroLiquido: number
): ValuationResults => {
    const fclEmMilhares = fcl * 1000;
    const taxaCrescimento = inputs.crescimentoProjecao;
    const crescimentoTerminalAjustado = Math.min(inputs.crescimentoTerminal, 3);

    const fcfProjections = Array(5).fill(0).map((_, i) =>
        fclEmMilhares * Math.pow(1 + taxaCrescimento / 100, i + 1)
    );

    const terminalValue = (fcfProjections[4] * (1 + crescimentoTerminalAjustado / 100)) /
        (inputs.wacc / 100 - crescimentoTerminalAjustado / 100);

    const presentValueFCF = fcfProjections.reduce((acc, fcf, i) =>
        acc + fcf / Math.pow(1 + inputs.wacc / 100, i + 1), 0
    );

    const presentValueTV = terminalValue / Math.pow(1 + inputs.wacc / 100, 5);
    const enterpriseValue = presentValueFCF + presentValueTV;
    const equityValue = enterpriseValue - dividaLiquida + caixaEquivalentes;
    const precoJusto = equityValue / acoesCirculacao;

    return {
        precoJusto,
        enterpriseValue,
        equityValue,
        subvalorizacao: (precoJusto / precoAcao - 1) * 100,
        evEbitda: enterpriseValue / ebitda,
        pl: precoJusto / (lucroLiquido / acoesCirculacao)
    };
};