import { Box, CircularProgress } from '@mui/material';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { SuspenseWrapper } from '@/components/SuspenseWrapper';
import { ViewMode } from './Elementos/ModoVisualizacao/types';
import { RedeNeural } from './Elementos/ModoVisualizacao/RedeNeural';
import { TabelaView } from './Elementos/ModoVisualizacao/TabelaView';
import { MapaArvore } from './Elementos/ModoVisualizacao/MapaArvore';
import { VisualizationWrapper, ContentPlaceholder } from './styled';

interface VisualizationContentProps {
    viewMode: ViewMode;
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
}

export const VisualizationContent = ({ viewMode, isLoading, setIsLoading }: VisualizationContentProps) => {

    const LoadingOverlay = () => (
        <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1000,
        }}>
            <CircularProgress size={60} sx={{ color: 'primary.main' }} />
        </Box>

    );
    const renderContent = () => {
        switch (viewMode) {
            case 'neural':
                return (
                    <VisualizationWrapper>
                        {isLoading && <LoadingOverlay />}
                        <RedeNeural onLoadingChange={setIsLoading} />
                    </VisualizationWrapper>
                );
            case 'tabela':
                return (
                    <VisualizationWrapper>
                        {isLoading && <LoadingOverlay />}
                        <TabelaView onLoadingChange={setIsLoading} />
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
                        {isLoading && <LoadingOverlay />}
                        <MapaArvore onLoadingChange={setIsLoading} />
                    </VisualizationWrapper>
                );
            default:
                return null;
        }
    };

    return (
        <ErrorBoundary>
            <SuspenseWrapper>
                {renderContent()}
            </SuspenseWrapper>
        </ErrorBoundary>
    );
};