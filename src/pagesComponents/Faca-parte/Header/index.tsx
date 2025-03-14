"use client";

import { Typography } from "@mui/material";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import GroupsIcon from '@mui/icons-material/Groups';

interface HeaderProps {
    isLoading: boolean;
}

export const Header = ({ isLoading }: HeaderProps) => {
    return (
        <div className="text-center md:text-left">
            <>
                <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                    <GroupsIcon sx={{ fontSize: 40, color: '#0D95F9' }} />
                    <MatrixRainText
                        text="Junte-se ao Time"
                        className="text-4xl font-bold text-[#0D95F9]"
                    />
                </div>
                <Typography variant="h6" className="text-white/95 mb-8">
                    Estamos sempre em busca de talentos apaixonados por inovação e mercado financeiro
                </Typography>
            </>
        </div>
    );
};