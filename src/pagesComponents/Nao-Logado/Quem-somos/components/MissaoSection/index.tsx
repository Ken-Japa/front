import RocketIcon from '@mui/icons-material/Rocket';
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import { BaseSection, SectionTitle, ContentContainer, Subtitle } from "../../styled";
import { MissaoSkeleton } from './MissaoSkeleton';
import { visitorColors } from "@/theme/palette/visitor";

interface MissaoSectionProps {
    isLoading?: boolean;
}

export const MissaoSection = ({ isLoading }: MissaoSectionProps) => {
    if (isLoading) {
        return <MissaoSkeleton />;
    }

    return (
        <BaseSection>
            <SectionTitle>
                <RocketIcon sx={{ color: visitorColors.accent, fontSize: 32 }} />
                <MatrixRainText
                    text="Nossa Missão: Equilibrar o Jogo Financeiro"
                    className="text-2xl text-[#FF4081]"
                />
            </SectionTitle>
            <Subtitle>
                Não Somos Fornecedores. Somos Armas Secretas.
            </Subtitle>
            <ContentContainer>
                <p>
                    Capacitar investidores com ferramentas tecnológicas inovadoras para tomada de decisões mais
                    informadas no mercado financeiro, promovendo educação financeira e democratizando o acesso a
                    análises avançadas de investimentos.<br /><br />
                    Dar conhecimento de padrões de mercado aos nossos usuários <br /><br />
                    Dar acesso a estratégias antes restritas a grandes fundos  <br /><br />
                    Criar uma geração de investidores tecnicamente empoderados
                </p>
            </ContentContainer>
        </BaseSection>
    );
};