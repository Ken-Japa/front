"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { EmpresasContainer, ContentPlaceholder, ControlsWrapper, SearchBarWrapper, ContentContainer } from './styled';
import { SuspenseWrapper } from '@/components/SuspenseWrapper';
import { ContentSkeleton } from '../../../components/Skeletons/ContentSkeleton';
import { ModoVisualizacao } from '../components/EmpresaView/Elementos/ModoVisualizacao';
import { ViewMode } from '../components/EmpresaView/types';
import { SearchBar } from '../components/EmpresaView/Elementos/SearchBar';
import { RedeNeural } from '../components/EmpresaView/Elementos/ModoVisualizacao/RedeNeural';

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
                return <RedeNeural />;
            case 'tabela':
                return (
                    <ContentPlaceholder>
                        Visualização em Tabela será implementada em breve
                    </ContentPlaceholder>
                );
            case 'cartao':
                return (
                    <ContentPlaceholder>
                        Visualização em Cartões será implementada em breve
                    </ContentPlaceholder>
                );
            case 'arvore':
                return (
                    <ContentPlaceholder>
                        Visualização em Árvore será implementada em breve
                    </ContentPlaceholder>
                );
            default:
                return null;
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

                <ContentContainer>
                    <ControlsWrapper>
                        <ModoVisualizacao
                            viewMode={viewMode}
                            onChangeView={setViewMode}
                        />
                    </ControlsWrapper>

                    {renderVisualization()}
                </ContentContainer>
            </EmpresasContainer>
        </SuspenseWrapper>
    );
};