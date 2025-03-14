"use client";

import { Typography, Chip } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

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
        <>
            <div className="bg-[#ffffff12] p-6 rounded-lg backdrop-blur-sm">
                <Typography variant="h6" className="text-[#0D95F9] mb-4 flex items-center gap-2">
                    <RocketLaunchIcon /> Benefícios
                </Typography>
                <div className="flex flex-wrap gap-2">
                    {benefits.map((benefit) => (
                        <Chip
                            key={benefit}
                            label={benefit}
                            sx={{
                                backgroundColor: 'rgba(13, 149, 249, 0.15)',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'rgba(13, 149, 249, 0.25)',
                                }
                            }}
                        />
                    ))}
                </div>
            </div>
            {/* Current Openings */}
            {/*<div className="bg-[#ffffff0a] p-6 rounded-lg backdrop-blur-sm">
                                <Typography variant="h6" className="text-[#0D95F9] mb-4 flex items-center gap-2">
                                    <WorkIcon /> Vagas Abertas
                                </Typography>
                                <Stack spacing={2}>
                                    {roles.map((role) => (
                                        <div key={role} className="p-3 bg-[#ffffff05] rounded-lg hover:bg-[#ffffff08] transition-all">
                                            <Typography className="text-white">{role}</Typography>
                                        </div>
                                    ))}
                                </Stack>
                            </div>*/}
        </>

    );
};