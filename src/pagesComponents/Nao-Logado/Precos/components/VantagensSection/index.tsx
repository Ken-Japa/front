import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import { BaseSection, ContentWrapper } from "../../styled";
import { VantagemCard, VantagensGrid } from "./styled";
import { VantagensSkeleton } from "./VantagensSkeleton";

interface VantagensSectionProps {
    isLoading?: boolean;
}

export const VantagensSection = ({ isLoading }: VantagensSectionProps) => {

    if (isLoading) {
        return <VantagensSkeleton />;
    }
    return (
        <BaseSection>
            <ContentWrapper spacing={6}>
                <MatrixRainText
                    text="Por que escolher a Auge Invest?"
                    className="text-[#FF4081] text-4xl font-bold"
                />
                <VantagensGrid>
                    <VantagemCard>
                        <h3 className="title">Análise Avançada</h3>
                        <p className="description">Ferramentas profissionais para análise de mercado e tomada de decisão</p>
                    </VantagemCard>
                    <VantagemCard>
                        <h3 className="title">Dados em Tempo Real</h3>
                        <p className="description">Acompanhe suas posições e o mercado com atualizações constantes</p>
                    </VantagemCard>
                    <VantagemCard>
                        <h3 className="title">Suporte Dedicado</h3>
                        <p className="description">Equipe especializada para ajudar em suas dúvidas</p>
                    </VantagemCard>
                </VantagensGrid>
            </ContentWrapper>
        </BaseSection>
    );
};