import { FC } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { CustomAccordion } from '@/components/Custom/Accordion';
import { ValuationResults, SensitivityResults } from '../../types';
import { ResultsContainer } from './styled';

interface ResultsSectionProps {
    results: ValuationResults;
    sensitivityResults: SensitivityResults | null;
}

export const ResultsSection: FC<ResultsSectionProps> = ({
    results,
    sensitivityResults
}) => {
    return (
        <ResultsContainer>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        Resultados do Valuation
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="subtitle1">
                        Preço Justo: R$ {results.precoJusto.toFixed(2)}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="subtitle1">
                        Subvalorização: {results.subvalorizacao.toFixed(2)}%
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="subtitle1">
                        EV/EBITDA: {results.evEbitda.toFixed(2)}x
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <CustomAccordion
                        title="Análise de Sensibilidade"
                        customBackground="rgba(13, 149, 249, 0.15)"
                        customBorderColor="rgba(13, 149, 249, 0.3)"
                        customTitleColor="#FFFFFF"
                        customContentBackground="rgba(13, 149, 249, 0.08)"
                        variant="dark"
                    >
                        <Box sx={{ p: 3 }}>
                            <Typography>
                                {sensitivityResults ? (
                                    `Variação de Preço: R$ ${sensitivityResults.pessimista.precoJusto.toFixed(2)} - R$ ${sensitivityResults.otimista.precoJusto.toFixed(2)}`
                                ) : (
                                    'Análise de sensibilidade não disponível'
                                )}
                            </Typography>
                        </Box>
                    </CustomAccordion>
                </Grid>
            </Grid>
        </ResultsContainer>
    );
};