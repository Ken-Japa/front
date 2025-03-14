"use client";

import { Typography, Chip } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { BenefitsContainer } from "./styled";

interface HeaderProps {
    isLoading: boolean;
}

const benefits = [
    "Trabalho Remoto",
    "Horário Flexível",
    "Ambiente Inovador",
    "Desenvolvimento Profissional",
    "Equipe Dinâmica",
    "Projetos Desafiadores"
];

export const Benefits = ({ isLoading }: HeaderProps) => {
    return (
        <BenefitsContainer>
            <Typography variant="h6" className="benefits-title">
                <RocketLaunchIcon /> Benefícios
            </Typography>
            <div className="benefits-grid">
                {benefits.map((benefit) => (
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