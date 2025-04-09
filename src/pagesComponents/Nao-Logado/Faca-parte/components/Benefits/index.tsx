import { type FC } from 'react';

import { Typography, Chip } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import { BenefitsContainer } from "./styled";
import { BenefitsSkeleton } from "./BenefitsSkeleton";

interface BenefitsProps {
    isLoading: boolean;
}

const BENEFITS = [
    "Trabalho Remoto",
    "Horário Flexível",
    "Ambiente Inovador",
    "Desenvolvimento Profissional",
    "Equipe Dinâmica",
    "Projetos Desafiadores"
] as const;

export const Benefits: FC<BenefitsProps> = ({ isLoading }) => {
    if (isLoading) {
        return <BenefitsSkeleton />;
    }

    return (
        <BenefitsContainer>
            <Typography variant="h2" className="benefits-title">
                <RocketLaunchIcon className="rocket-icon" /> Benefícios
            </Typography>
            <div className="benefits-grid">
                {BENEFITS.map((benefit) => (
                    <Chip
                        key={benefit}
                        label={benefit}
                        className="benefit-chip"
                    />
                ))}
            </div>
        </BenefitsContainer>
    );
};