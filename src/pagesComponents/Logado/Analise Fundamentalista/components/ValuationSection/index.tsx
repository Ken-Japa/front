import { useState, useEffect, useCallback } from 'react';
import { Grid, Button } from '@mui/material';
import { ValuationInputsSection } from './components/ValuationInputsSection';
import { HistoricalDataSection } from './components/HistoricalDataSection';
import { ResultsSection } from './components/ResultsSection';
import { ScenariosSection } from './components/ScenariosSection';
import { calculateGrowthRate, calculateScenario } from './utils/calculations';
import { DEFAULT_VALUATION_INPUTS, DEFAULT_SCENARIO_INPUTS } from './constants';
import { SectionContainer, SectionTitle } from './styled';
import type {
    ValuationSectionProps,
    ValuationInputs,
    ScenarioInputs,
    HistoricalFCF,
    ValuationResults,
    SensitivityResults
} from './types';

export const ValuationSection = ({
    fluxoCaixaOperacional: defaultFCO,
    fluxoCaixaLivre: defaultFCL,
    precoAcao,
    acoesCirculacao,
    dividaLiquida,
    ebitda,
    lucroLiquido,
    caixaEquivalentes
}: ValuationSectionProps) => {
    const [fco, setFco] = useState(defaultFCO);
    const [fcl, setFcl] = useState(defaultFCL);
    const [historicalData, setHistoricalData] = useState<HistoricalFCF[]>([]);
    const [valuationInputs, setValuationInputs] = useState(DEFAULT_VALUATION_INPUTS);
    const [scenarioInputs, setScenarioInputs] = useState(DEFAULT_SCENARIO_INPUTS);
    const [results, setResults] = useState<ValuationResults | null>(null);
    const [sensitivityResults, setSensitivityResults] = useState<SensitivityResults | null>(null);

    const handleValuationInputChange = (field: keyof ValuationInputs, value: number) => {
        setValuationInputs(prev => ({ ...prev, [field]: value }));
    };

    const handleScenarioChange = (
        scenario: 'otimista' | 'pessimista',
        field: keyof ScenarioInputs,
        value: number
    ) => {
        setScenarioInputs(prev => ({
            ...prev,
            [scenario]: { ...prev[scenario], [field]: value }
        }));
    };

    const [isCalculating, setIsCalculating] = useState(false);

    const calculateValuation = useCallback(async () => {
        setIsCalculating(true);
        try {
            const baseInputs = {
                ...valuationInputs,
                crescimentoProjecao: calculateGrowthRate(historicalData, valuationInputs.crescimentoProjecao)
            };

            const baseResults = calculateScenario(
                baseInputs,
                fcl,
                dividaLiquida,
                caixaEquivalentes,
                acoesCirculacao,
                precoAcao,
                ebitda,
                lucroLiquido
            );

            const otimista = calculateScenario(
                scenarioInputs.otimista,
                fcl,
                dividaLiquida,
                caixaEquivalentes,
                acoesCirculacao,
                precoAcao,
                ebitda,
                lucroLiquido
            );

            const pessimista = calculateScenario(
                scenarioInputs.pessimista,
                fcl,
                dividaLiquida,
                caixaEquivalentes,
                acoesCirculacao,
                precoAcao,
                ebitda,
                lucroLiquido
            );

            setResults(baseResults);
            setSensitivityResults({ base: baseResults, otimista, pessimista });
        } catch (error) {
            console.error('Error calculating valuation:', error);
            setResults(null);
            setSensitivityResults(null);
        } finally {
            setIsCalculating(false);
        }
    }, [
        valuationInputs,
        historicalData,
        scenarioInputs,
        fcl,
        dividaLiquida,
        caixaEquivalentes,
        acoesCirculacao,
        precoAcao,
        ebitda,
        lucroLiquido
    ]);

    useEffect(() => {
        if (fcl && historicalData.length > 0) {
            calculateValuation();
        }
    }, [fcl, historicalData, calculateValuation]);

    const handleCalculateClick = useCallback(() => {
        if (!fcl) {
            console.error('FCL is required for calculation');
            return;
        }
        calculateValuation();
    }, [fcl, calculateValuation]);

    return (
        <SectionContainer>
            <SectionTitle variant="h6" gutterBottom>
                Valuation
            </SectionTitle>

            <ValuationInputsSection
                inputs={valuationInputs}
                fco={fco}
                fcl={fcl}
                onInputChange={handleValuationInputChange}
                onFcoChange={(value) => setFco(value ?? defaultFCO)}
                onFclChange={(value) => setFcl(value ?? defaultFCL)}
            />

            <HistoricalDataSection
                historicalData={historicalData}
                onAddYear={() => setHistoricalData([...historicalData, { year: historicalData.length + 1, value: null }])}
                onRemoveYear={(index) => {
                    const newData = historicalData.filter((_, i) => i !== index)
                        .map((item, idx) => ({ ...item, year: idx + 1 }));
                    setHistoricalData(newData);
                }}
                onDataChange={(index, value) => {
                    const newData = [...historicalData];
                    newData[index].value = value;
                    setHistoricalData(newData);
                }}
            />

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        onClick={handleCalculateClick}
                        fullWidth
                        disabled={isCalculating || !fcl}
                    >
                        {isCalculating ? 'Calculando...' : 'Calcular Valuation'}
                    </Button>
                </Grid>
            </Grid>

            {results && (
                <>
                    <ResultsSection
                        results={results}
                        sensitivityResults={sensitivityResults}
                    />
                    <ScenariosSection
                        scenarioInputs={scenarioInputs}
                        sensitivityResults={sensitivityResults}
                        onScenarioChange={handleScenarioChange}
                    />
                </>
            )}
        </SectionContainer>
    );
};


