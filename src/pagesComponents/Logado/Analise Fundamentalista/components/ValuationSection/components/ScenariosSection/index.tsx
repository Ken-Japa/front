import { FC } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { NumberInput } from '@/components/NumberInput';
import { CustomAccordion } from '@/components/Custom/Accordion';
import { ScenarioInputs, ValuationResults } from '../../types';
import { ScenarioContainer } from './styled';

interface ScenariosSectionProps {
    scenarioInputs: {
        otimista: ScenarioInputs;
        pessimista: ScenarioInputs;
    };
    sensitivityResults: {
        otimista: ValuationResults;
        pessimista: ValuationResults;
    } | null;
    onScenarioChange: (
        scenario: 'otimista' | 'pessimista',
        field: keyof ScenarioInputs,
        value: number
    ) => void;
}

export const ScenariosSection: FC<ScenariosSectionProps> = ({
    scenarioInputs,
    sensitivityResults,
    onScenarioChange
}) => {
    return (
        <CustomAccordion
            title="Análise de Sensibilidade"
            customBackground="rgba(13, 149, 249, 0.15)"
            customBorderColor="rgba(13, 149, 249, 0.3)"
            customTitleColor="#FFFFFF"
            customContentBackground="rgba(13, 149, 249, 0.08)"
            variant="dark"
        >
            <ScenarioContainer>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            Cenário Otimista
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <NumberInput
                                    label="WACC (%)"
                                    value={scenarioInputs.otimista.wacc}
                                    onChange={(value) => onScenarioChange('otimista', 'wacc', value ?? 0)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <NumberInput
                                    label="Crescimento Terminal (%)"
                                    value={scenarioInputs.otimista.crescimentoTerminal}
                                    onChange={(value) => onScenarioChange('otimista', 'crescimentoTerminal', value ?? 0)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <NumberInput
                                    label="Crescimento Projeção (%)"
                                    value={scenarioInputs.otimista.crescimentoProjecao}
                                    onChange={(value) => onScenarioChange('otimista', 'crescimentoProjecao', value ?? 0)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            Cenário Pessimista
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <NumberInput
                                    label="WACC (%)"
                                    value={scenarioInputs.pessimista.wacc}
                                    onChange={(value) => onScenarioChange('pessimista', 'wacc', value ?? 0)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <NumberInput
                                    label="Crescimento Terminal (%)"
                                    value={scenarioInputs.pessimista.crescimentoTerminal}
                                    onChange={(value) => onScenarioChange('pessimista', 'crescimentoTerminal', value ?? 0)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <NumberInput
                                    label="Crescimento Projeção (%)"
                                    value={scenarioInputs.pessimista.crescimentoProjecao}
                                    onChange={(value) => onScenarioChange('pessimista', 'crescimentoProjecao', value ?? 0)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    {sensitivityResults && (
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom>
                                Comparação de Cenários
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                                <Typography>
                                    Variação de Preço: R$ {sensitivityResults.pessimista.precoJusto.toFixed(2)} - R$ {sensitivityResults.otimista.precoJusto.toFixed(2)}
                                </Typography>
                            </Box>
                        </Grid>
                    )}
                </Grid>
            </ScenarioContainer>
        </CustomAccordion>
    );
};