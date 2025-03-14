"use client";

import { Typography } from "@mui/material";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import GroupsIcon from '@mui/icons-material/Groups';
import { HeaderContainer } from "./styled";

interface HeaderProps {
    isLoading: boolean;
}

export const Header = ({ isLoading }: HeaderProps) => {
    return (
        <HeaderContainer>
            <div className="header-content">
                <GroupsIcon sx={{ fontSize: 40, color: '#0D95F9' }} />
                <MatrixRainText
                    text="Junte-se ao Time"
                    className="title"
                />
            </div>
            <Typography variant="h6" className="subtitle">
                Estamos sempre em busca de talentos apaixonados por inovação e mercado financeiro
            </Typography>
        </HeaderContainer>
    );
};