"use client";

import { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { MetricasEmpresa } from './components/MetricasEmpresa';
import { GraficoHistorico } from './components/GraficoHistorico';
import { AlertasSection } from './components/AlertasSection';
import { DividendosTab } from './components/DividendosTab';
import { DerivativosTab } from './components/DerivativosTab';
import { EmpresaContainer, TabPanel } from './styled';

interface EmpresaDetalhesProps {
    slug: string;
}

type TabValue = 'principal' | 'dividendos' | 'derivativos';

export const EmpresaDetalhes = ({ slug }: EmpresaDetalhesProps) => {
    const [currentTab, setCurrentTab] = useState<TabValue>('principal');

    const handleTabChange = (event: React.SyntheticEvent, newValue: TabValue) => {
        setCurrentTab(newValue);
    };

    return (
        <EmpresaContainer>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={currentTab} onChange={handleTabChange}>
                    <Tab label={slug.toUpperCase()} value="principal" />
                    <Tab label="Dividendos" value="dividendos" />
                    <Tab label="Derivativos" value="derivativos" />
                </Tabs>
            </Box>

            <TabPanel value={currentTab} index="principal">
                <MetricasEmpresa 
                    valor={26.61}
                    variacao={-0.34}
                    minimo52={21.68}
                    maximo52={28.84}
                    dividendYield={9.14}
                    valorizacao12m={16.15}
                />
                <GraficoHistorico />
                <AlertasSection />
            </TabPanel>

            <TabPanel value={currentTab} index="dividendos">
                <DividendosTab />
            </TabPanel>

            <TabPanel value={currentTab} index="derivativos">
                <DerivativosTab />
            </TabPanel>
        </EmpresaContainer>
    );
};