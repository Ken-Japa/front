import StarIcon from '@mui/icons-material/Star';
import { VALORES } from '../../constants/valores';
import { BaseSection, SectionTitle } from "../../styled";
import { ValoresGrid, ValorCard } from "./styled";
import { ValoresSkeleton } from './ValoresSkeleton';

interface ValoresSectionProps {
    isLoading?: boolean;
}
export const ValoresSection = ({ isLoading }: ValoresSectionProps) => {
    if (isLoading) {
        return <ValoresSkeleton />;
    }
    return (
        <BaseSection>
            <SectionTitle>
                <StarIcon sx={{ color: '#FF4081', fontSize: 32 }} />
                <h2 className="text-2xl text-[#FF4081]">Nossos Valores: Ética e Inteligência</h2>
            </SectionTitle>
            <ValoresGrid>
                {VALORES.map((valor) => (
                    <ValorCard key={valor.title}>
                        {valor.icon}
                        <h3>{valor.title}</h3>
                        <p>{valor.description}</p>
                    </ValorCard>
                ))}
            </ValoresGrid>
        </BaseSection>
    );
};