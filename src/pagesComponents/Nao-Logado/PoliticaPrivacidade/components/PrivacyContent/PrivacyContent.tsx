import { Stack } from "@mui/material";
import { PrivacySection } from "../PrivacySection";
import { PRIVACY_SECTIONS } from "../../constants/sections";
import { PrivacyContentSkeleton } from "./PrivacyContentSkeleton";
import {
    DadosSection,
    FinalidadeSection,
    CompartilhamentoSection,
    TransferenciaSection,
    ConsentimentoSection,
    ArmazenamentoSection,
    RetencaoSection,
    DireitosSection
} from "./sections";

interface PrivacyContentProps {
    isLoading?: boolean;
}

export const PrivacyContent = ({ isLoading }: PrivacyContentProps) => {
    if (isLoading) {
        return <PrivacyContentSkeleton />;
    }

    const sections = {
        dados: <DadosSection />,
        finalidade: <FinalidadeSection />,
        compartilhamento: <CompartilhamentoSection />,
        transferencia: <TransferenciaSection />,
        consentimento: <ConsentimentoSection />,
        armazenamento: <ArmazenamentoSection />,
        retencao: <RetencaoSection />,
        direitos: <DireitosSection />
    };

    return (
        <Stack direction="column" spacing={6} className="text-white/95">
            {PRIVACY_SECTIONS.map(section => (
                <PrivacySection
                    key={section.id}
                    id={section.id}
                    title={section.title}
                >
                    {sections[section.id as keyof typeof sections]}
                </PrivacySection>
            ))}
        </Stack>
    );
};