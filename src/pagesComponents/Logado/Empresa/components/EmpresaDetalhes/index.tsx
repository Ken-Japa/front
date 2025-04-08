"use client";

import { useState, useEffect } from 'react';
import { Tabs, Tab, Box, Typography, Paper } from '@mui/material';
import { MetricasEmpresa } from './components/MetricasEmpresa';
import { GraficoHistorico } from './components/GraficoHistorico';
import { AlertasSection } from './components/AlertasSection';
import { DividendosTab } from './components/DividendosTab';
import { DerivativosTab } from './components/DerivativosTab';
import { EmpresaContainer, ContentContainer } from './styled';
import { TabPanel } from './components/TabPanel';
import { getEmpresaBySlug, getCodigoPrincipal, getAllEmpresas } from './services/empresaService';
import { getHistoricalData } from './components/GraficoHistorico/services/historicalService';
import { EmpresaDetalhada, Codigo } from '../../types';
import { EmpresaHeader } from './components/EmpresaHeader';
import { calculateAllMetrics, PriceDataPoint } from './utils/metricasCalculations';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { PageTransition } from '@/components/PageTransition';
import { ContentSkeleton } from '@/components/Skeletons/ContentSkeleton';
import { ProgressiveLoad } from '@/components/ProgressiveLoad';

interface EmpresaDetalhesProps {
    slug: string;
    codigoSelecionado?: string;
}

type TabValue = 'principal' | 'dividendos' | 'derivativos';

export const EmpresaDetalhes = ({ slug, codigoSelecionado }: EmpresaDetalhesProps) => {
    const [currentTab, setCurrentTab] = useState<TabValue>('principal');
    const [empresa, setEmpresa] = useState<EmpresaDetalhada | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [codigoAtivo, setCodigoAtivo] = useState<string | null>(codigoSelecionado || null);
    const [historicalData, setHistoricalData] = useState<PriceDataPoint[]>([]);
    const [metricas, setMetricas] = useState({
        minimo52: 0,
        maximo52: 0,
        dividendYield: 0,
        valorizacao12m: 0
    });

    // Fetch empresa data
    useEffect(() => {
        const fetchEmpresa = async () => {
            try {
                setLoading(true);

                // Verificar se o slug é um código de ativo
                let empresaData: EmpresaDetalhada | null = null;
                let codigoAtivoFinal = codigoSelecionado;

                // Primeiro, tenta buscar como nome da empresa ou código
                const result = await getEmpresaBySlug(slug);
                empresaData = result.empresa;

                // Se encontrou por código, usar esse código como ativo
                if (result.codigoEncontrado && !codigoSelecionado) {
                    codigoAtivoFinal = result.codigoEncontrado.toUpperCase();
                }

                // Se não encontrou, tentar buscar como código em todas as empresas
                if (!empresaData) {
                    // Buscar todas as empresas para encontrar a que tem o código correspondente ao slug
                    const todasEmpresas = await getAllEmpresas();

                    for (const emp of todasEmpresas) {
                        const codigoEncontrado = emp.codigos.find(
                            (cod: Codigo) => cod.codigo.toUpperCase() === slug.toUpperCase()
                        );

                        if (codigoEncontrado) {
                            empresaData = emp;
                            // Se o slug era um código e não foi fornecido um codigoSelecionado,
                            // então o código do slug deve ser o selecionado
                            if (!codigoSelecionado) {
                                codigoAtivoFinal = slug.toUpperCase();
                            }
                            break;
                        }
                    }
                }

                if (!empresaData) {
                    setError('Empresa não encontrada');
                    return;
                }

                setEmpresa(empresaData);

                // Define o código ativo
                if (codigoAtivoFinal) {
                    setCodigoAtivo(codigoAtivoFinal);
                } else {
                    // Se não tiver código selecionado, seleciona o principal
                    setCodigoAtivo(getCodigoPrincipal(empresaData.codigos));
                }
            } catch (err) {
                console.error('Erro ao carregar dados da empresa:', err);
                setError('Falha ao carregar dados da empresa');
            } finally {
                setLoading(false);
            }
        };

        fetchEmpresa();
    }, [slug, codigoSelecionado]);

    // Fetch historical data and calculate metrics when empresa or codigoAtivo changes
    useEffect(() => {
        const fetchHistoricalDataAndCalculateMetrics = async () => {
            if (!empresa || !codigoAtivo) return;

            try {
                // Fetch historical data for the active code
                // You might need to implement this function in empresaService.ts
                const data = await getHistoricalData(codigoAtivo);
                setHistoricalData(data);

                // Calculate annual dividends (sum of all dividends in the last 12 months)
                let annualDividends = 0;

                try {
                    if (empresa.dividendos && Array.isArray(empresa.dividendos)) {
                        const oneYearAgo = new Date();
                        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

                        annualDividends = empresa.dividendos
                            .filter(div => {
                                if (!div) return false;

                                // Handle different possible data structures using type assertion
                                const dividend = div as any;
                                let divDate;

                                try {
                                    if (dividend.data && typeof dividend.data === 'string') {
                                        divDate = new Date(dividend.data);
                                    } else if (dividend.date && typeof dividend.date === 'string') {
                                        divDate = new Date(dividend.date);
                                    } else {
                                        return false;
                                    }

                                    return !isNaN(divDate.getTime()) && divDate >= oneYearAgo;
                                } catch (e) {
                                    console.error('Error parsing dividend date:', e, div);
                                    return false;
                                }
                            })
                            .reduce((sum, div) => {
                                // Handle different value property names using type assertion
                                const dividend = div as any;
                                let divValue = 0;

                                if (dividend.valor !== undefined && typeof dividend.valor === 'number') {
                                    divValue = dividend.valor;
                                } else if (dividend.value !== undefined && typeof dividend.value === 'number') {
                                    divValue = dividend.value;
                                } else if (dividend.amount !== undefined && typeof dividend.amount === 'number') {
                                    divValue = dividend.amount;
                                }

                                return sum + divValue;
                            }, 0);
                    }
                } catch (e) {
                    console.error('Error calculating annual dividends:', e);
                }

                // Calculate all metrics
                const metrics = calculateAllMetrics(data, annualDividends);

                // Update state
                setMetricas(metrics);
            } catch (err) {
                console.error('Erro ao carregar dados históricos:', err);
            }
        };

        fetchHistoricalDataAndCalculateMetrics();
    }, [empresa, codigoAtivo]);

    const handleTabChange = (event: React.SyntheticEvent, newValue: TabValue) => {
        setCurrentTab(newValue);
    };

    const handleCodigoChange = (codigo: string) => {
        setCodigoAtivo(codigo);
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                <ContentSkeleton type="card" cardHeight={400} />
            </Box>
        );
    }

    if (error || !empresa) {
        return (
            <Paper sx={{ p: 3, textAlign: 'center' }}>
                <Typography color="error">{error || 'Empresa não encontrada'}</Typography>
            </Paper>
        );
    }

    // Encontrar o código ativo nos dados da empresa
    const codigoAtivoData = empresa.codigos.find(c => c.codigo === codigoAtivo) || empresa.codigos[0];

    return (
        <ErrorBoundary>
            <PageTransition>
                <EmpresaContainer>
                    <ContentContainer>
                        <EmpresaHeader
                            empresa={empresa}
                            codigoAtivo={codigoAtivo || ''}
                            onCodigoChange={handleCodigoChange}
                        />

                        <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 3 }}>
                            <Tabs value={currentTab} onChange={handleTabChange}>
                                <Tab label="Principal" value="principal" />
                                <Tab label="Dividendos" value="dividendos" />

                            </Tabs>
                        </Box>

                        <TabPanel value={currentTab} index="principal">
                            <ProgressiveLoad>
                                <MetricasEmpresa
                                    valor={codigoAtivoData?.preco || 0}
                                    variacao={codigoAtivoData?.variacao || 0}
                                    minimo52={metricas.minimo52}
                                    maximo52={metricas.maximo52}
                                    dividendYield={metricas.dividendYield}
                                    valorizacao12m={metricas.valorizacao12m}
                                />
                            </ProgressiveLoad>

                            <ProgressiveLoad delay={0.2}>
                                <GraficoHistorico codigoAtivo={codigoAtivo || ''} />
                            </ProgressiveLoad>

                            <ProgressiveLoad delay={0.4}>
                                <AlertasSection codigoAtivo={codigoAtivo || ''} />
                            </ProgressiveLoad>
                        </TabPanel>

                        <TabPanel value={currentTab} index="dividendos">
                            <ProgressiveLoad>
                                <DividendosTab dividendos={empresa.dividendos} />
                            </ProgressiveLoad>
                        </TabPanel>

                    </ContentContainer>
                </EmpresaContainer>
            </PageTransition>
        </ErrorBoundary>
    );
};