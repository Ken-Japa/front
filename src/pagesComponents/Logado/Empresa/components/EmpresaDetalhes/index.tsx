"use client";

import { useState, useEffect } from 'react';
import { Tabs, Tab, Box, Typography, CircularProgress, Paper } from '@mui/material';
import { MetricasEmpresa } from './components/MetricasEmpresa';
import { GraficoHistorico } from './components/GraficoHistorico';
import { AlertasSection } from './components/AlertasSection';
import { DividendosTab } from './components/DividendosTab';
import { DerivativosTab } from './components/DerivativosTab';
import { Noticias } from './components/Noticias';
// Update the import line that references TabPanel
import { EmpresaContainer, ContentContainer } from './styled';
import { TabPanel } from './components/TabPanel';
import { getEmpresaBySlug, getCodigoPrincipal } from './services/empresaService';
import { EmpresaDetalhada } from '../../types';
import { EmpresaHeader } from './components/EmpresaHeader';

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

    useEffect(() => {
        const fetchEmpresa = async () => {
            try {
                setLoading(true);
                const data = await getEmpresaBySlug(slug);

                if (!data) {
                    setError('Empresa não encontrada');
                    return;
                }

                setEmpresa(data);

                // Se não tiver código selecionado, seleciona o principal
                if (!codigoSelecionado) {
                    setCodigoAtivo(getCodigoPrincipal(data.codigos));
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

    const handleTabChange = (event: React.SyntheticEvent, newValue: TabValue) => {
        setCurrentTab(newValue);
    };

    const handleCodigoChange = (codigo: string) => {
        setCodigoAtivo(codigo);
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                <CircularProgress />
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
                        {empresa.temDerivativo && (
                            <Tab label="Derivativos" value="derivativos" />
                        )}
                    </Tabs>
                </Box>

                <TabPanel value={currentTab} index="principal">
                    <MetricasEmpresa
                        valor={codigoAtivoData.preco}
                        variacao={codigoAtivoData.variacao}
                        minimo52={codigoAtivoData.preco * 0.8} // Exemplo - substituir por dados reais
                        maximo52={codigoAtivoData.preco * 1.2} // Exemplo - substituir por dados reais
                        dividendYield={9.14} // Exemplo - calcular com base nos dividendos
                        valorizacao12m={16.15} // Exemplo - substituir por dados reais
                    />
                    <GraficoHistorico codigoAtivo={codigoAtivo || ''} />
                    <AlertasSection codigoAtivo={codigoAtivo || ''} />
                    <Noticias symbol={codigoAtivo || slug} />
                </TabPanel>

                <TabPanel value={currentTab} index="dividendos">
                    <DividendosTab dividendos={empresa.dividendos} />
                </TabPanel>

                {empresa.temDerivativo && (
                    <TabPanel value={currentTab} index="derivativos">
                        <DerivativosTab codigoBase={codigoAtivo || ''} />
                    </TabPanel>
                )}
            </ContentContainer>
        </EmpresaContainer>
    );
};