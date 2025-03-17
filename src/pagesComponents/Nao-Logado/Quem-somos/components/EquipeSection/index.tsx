import GroupsIcon from '@mui/icons-material/Groups';
import { BaseSection, SectionTitle } from "../../styled";
import { EquipeContainer } from "./styled";
import { EquipeSkeleton } from './EquipeSkeleton';

interface EquipeSectionProps {
    isLoading?: boolean;
}

export const EquipeSection = ({ isLoading }: EquipeSectionProps) => {
    if (isLoading) {
        return <EquipeSkeleton />;
    }
    return (
        <BaseSection>
            <SectionTitle>
                <GroupsIcon sx={{ color: '#FF4081', fontSize: 32 }} />
                <h2 className="text-2xl text-[#FF4081]">Nossa Equipe</h2>
            </SectionTitle>
            <p className="text-white/90 mb-8">
                O Cérebro por Trás da Revolução
            </p>
            <EquipeContainer>
                <p>
                    Somos um time diversificado de profissionais apaixonados por tecnologia e mercado financeiro.<br /><br />
                    Nossa equipe combina experiência em desenvolvimento de software, análise de dados, mercado
                    financeiro e atendimento ao cliente para oferecer a melhor experiência possível.
                </p>
            </EquipeContainer>
        </BaseSection>
    );
};