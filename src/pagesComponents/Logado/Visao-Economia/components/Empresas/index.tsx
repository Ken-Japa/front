"use client";

import { useState } from 'react';
import { ViewMode } from '../../../components/EmpresaView/types';
import { SuspenseWrapper } from '@/components/SuspenseWrapper';
import { ContentSkeleton } from '../../../../../components/Skeletons/ContentSkeleton';
import { EmpresasContainer, ContentPlaceholder, ControlsWrapper } from './styled';
import { ModoVisualizacao } from '../../../components/EmpresaView/Elementos/ModoVisualizacao';
import { SearchBar } from '../../../components/EmpresaView/Elementos/SearchBar';

export const Empresas = () => {
    const [viewMode, setViewMode] = useState<ViewMode>('neural');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <SuspenseWrapper
            fallback={<ContentSkeleton height={400} />}
        >
            <EmpresasContainer>
                <ControlsWrapper>
                    <ModoVisualizacao
                        viewMode={viewMode}
                        onChangeView={setViewMode}
                    />
                    <SearchBar
                        value={searchQuery}
                        onChange={setSearchQuery}
                    />
                </ControlsWrapper>
                <ContentPlaceholder>
                    EMPRESAS<br />
                    Visualização será implementada quando a API estiver disponível
                </ContentPlaceholder>
            </EmpresasContainer>
        </SuspenseWrapper>
    );
};