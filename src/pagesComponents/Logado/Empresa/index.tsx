"use client";

import { useState } from 'react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { PageTransition } from '@/components/PageTransition';
import { SuspenseWrapper } from '@/components/SuspenseWrapper';
import { Box } from '@mui/material';

import { ContentSkeleton } from '../../../components/Skeletons/ContentSkeleton';
import { SearchBar } from '../components/EmpresaView/Elementos/SearchBar';
import { ViewMode } from '../components/EmpresaView/Elementos/ModoVisualizacao/types';
import { ModoVisualizacao } from '../components/EmpresaView/Elementos/ModoVisualizacao';
import { VisualizationContent } from '../components/EmpresaView';
import { EmpresasContainer, SearchBarWrapper, ControlsWrapper, ContentContainer } from './styled';

export const Empresa = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [viewMode, setViewMode] = useState<ViewMode>('neural');


    return (
        <ErrorBoundary>
            <PageTransition>
                <SuspenseWrapper fallback={<ContentSkeleton height={600} />}>
                    <EmpresasContainer>
                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <SearchBarWrapper>
                                <SearchBar />
                            </SearchBarWrapper>

                            <ContentContainer>
                                <ControlsWrapper>
                                    <ModoVisualizacao
                                        viewMode={viewMode}
                                        onChangeView={setViewMode}
                                    />
                                </ControlsWrapper>

                                <VisualizationContent
                                    viewMode={viewMode}
                                    isLoading={isLoading}
                                    setIsLoading={setIsLoading}
                                />
                            </ContentContainer>
                        </Box>
                    </EmpresasContainer>
                </SuspenseWrapper>
            </PageTransition>
        </ErrorBoundary>
    );
};