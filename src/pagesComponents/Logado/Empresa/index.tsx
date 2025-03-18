"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { EmpresasContainer, ContentPlaceholder, ControlsWrapper, SearchBarWrapper, ContentContainer } from './styled';
import { SuspenseWrapper } from '@/components/SuspenseWrapper';
import { ContentSkeleton } from '../../../components/Skeletons/ContentSkeleton';
import { ModoVisualizacao } from '../components/EmpresaView/Elementos/ModoVisualizacao';
import { ViewMode } from '../components/EmpresaView/types';
import { SearchBar } from '../components/EmpresaView/Elementos/SearchBar';

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

    return (
        <SuspenseWrapper fallback={<ContentSkeleton height={600} />}>
            <EmpresasContainer>
                <SearchBarWrapper>
                    <SearchBar
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </SearchBarWrapper>

                <ContentContainer maxWidth="md">
                    <ControlsWrapper>
                        <ModoVisualizacao
                            viewMode={viewMode}
                            onChangeView={setViewMode}
                        />
                    </ControlsWrapper>

                    <ContentPlaceholder marginBottom={12}>
                        EMPRESAS<br />
                        Visualização será implementada quando a API estiver disponível
                    </ContentPlaceholder>
                </ContentContainer>
            </EmpresasContainer>
        </SuspenseWrapper>
    );
};