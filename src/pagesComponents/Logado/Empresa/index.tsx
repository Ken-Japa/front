"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { EmpresasContainer, ContentPlaceholder, ControlsWrapper, SearchBarWrapper, ContentContainer, VisualizationWrapper } from './styled';
import { SuspenseWrapper } from '@/components/SuspenseWrapper';
import { Box } from '@mui/material';
import { ContentSkeleton } from '../../../components/Skeletons/ContentSkeleton';
import { ModoVisualizacao } from '../components/EmpresaView/Elementos/ModoVisualizacao';
import { ViewMode } from '../components/EmpresaView/Elementos/ModoVisualizacao/types';
import { SearchBar } from '../components/EmpresaView/Elementos/SearchBar';
import { RedeNeural } from '../components/EmpresaView/Elementos/ModoVisualizacao/RedeNeural';
import { TabelaView } from '../components/EmpresaView/Elementos/ModoVisualizacao/TabelaView';
import { MapaArvore } from '../components/EmpresaView/Elementos/ModoVisualizacao/MapaArvore';

export const Empresa = () => {
    const [viewMode, setViewMode] = useState<ViewMode>('neural');
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handleEmpresaClick = (slug: string) => {
        router.push(`/empresa/${slug}`);
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        if (query.length >= 5) {
            router.push(`/empresa/${query}`);
        }
    };

    const renderVisualization = () => {
        switch (viewMode) {
            case 'neural':
                return (
                    <VisualizationWrapper>
                        <RedeNeural />
                    </VisualizationWrapper>
                );
            case 'tabela':
                return (
                    <VisualizationWrapper>
                        <TabelaView />
                    </VisualizationWrapper>
                );
            case 'cartao':
                return (
                    <VisualizationWrapper>
                        <ContentPlaceholder>
                            Visualização em Cartões será implementada em breve
                        </ContentPlaceholder>
                    </VisualizationWrapper>
                );
            case 'arvore':
                return (
                    <VisualizationWrapper>
                        <MapaArvore />
                    </VisualizationWrapper>
                );
            default:
                return null;
        }
    };

    return (
        <SuspenseWrapper fallback={<ContentSkeleton height={600} />}>
            <EmpresasContainer>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <SearchBarWrapper>
                        <SearchBar
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </SearchBarWrapper>

                    <ContentContainer>
                        <ControlsWrapper>
                            <ModoVisualizacao
                                viewMode={viewMode}
                                onChangeView={setViewMode}
                            />
                        </ControlsWrapper>

                        {renderVisualization()}
                    </ContentContainer>
                </Box>
            </EmpresasContainer>
        </SuspenseWrapper>
    );
};