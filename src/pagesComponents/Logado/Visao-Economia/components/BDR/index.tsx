"use client";

import { useState } from 'react';
import { ViewMode } from './types';
import { BdrContainer, ContentPlaceholder, ControlsWrapper } from './styled';
import { ModoVisualizacao } from './Elementos/ModoVisualizacao';
import { SearchBar } from './Elementos/SearchBar';

export const Bdr = () => {
    const [viewMode, setViewMode] = useState<ViewMode>('neural');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <BdrContainer>
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
                BDR<br />
                Visualização será implementada quando a API estiver disponível
            </ContentPlaceholder>
        </BdrContainer>
    );
};