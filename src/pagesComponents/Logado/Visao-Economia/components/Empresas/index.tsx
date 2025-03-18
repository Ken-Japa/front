"use client";

import { useState } from 'react';
import { ViewMode } from './types';
import { EmpresasContainer, ContentPlaceholder, ControlsWrapper } from './styled';
import { ModoVisualizacao } from './Elementos/ModoVisualizacao';
import { SearchBar } from './Elementos/SearchBar';

export const Empresas = () => {
    const [viewMode, setViewMode] = useState<ViewMode>('neural');
    const [searchQuery, setSearchQuery] = useState('');

    return (
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
    );
};