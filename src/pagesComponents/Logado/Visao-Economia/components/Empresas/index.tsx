"use client";

import { useState } from 'react';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { SuspenseWrapper } from '@/components/SuspenseWrapper';
import { ViewMode } from '../../../components/EmpresaView/Elementos/ModoVisualizacao/types';
import { ContentSkeleton } from '../../../../../components/Skeletons/ContentSkeleton';
import { ModoVisualizacao } from '../../../components/EmpresaView/Elementos/ModoVisualizacao';
import { SearchBar } from '../../../components/EmpresaView/Elementos/SearchBar';
import { VisualizationContent } from '../../../components/EmpresaView';
import { EmpresasContainer, ControlsWrapper, VisualizationWrapper } from './styled';


export const Empresas = () => {
    const [viewMode, setViewMode] = useState<ViewMode>('tabela');
    const [isLoading, setIsLoading] = useState(true);


    return (
        <ErrorBoundary>
            <SuspenseWrapper
                fallback={<ContentSkeleton height={400} />}
            >
                <EmpresasContainer>
                    <ControlsWrapper>
                        <ModoVisualizacao
                            viewMode={viewMode}
                            onChangeView={setViewMode}
                        />
                        <SearchBar />
                    </ControlsWrapper>

                    <VisualizationWrapper>
                        <VisualizationContent
                            viewMode={viewMode}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                        />
                    </VisualizationWrapper>

                </EmpresasContainer>
            </SuspenseWrapper>
        </ErrorBoundary>
    );
};