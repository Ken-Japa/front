import { type FC } from 'react';

import { Typography } from "@mui/material";
import SecurityIcon from '@mui/icons-material/Security';

import { MatrixRainText } from "@/components/Effects/MatrixRainText";

import { HeaderWrapper } from "./styled";
import { HeaderSkeleton } from "./HeaderSkeleton";

interface HeaderProps {
    isLoading?: boolean;
}

export const Header: FC<HeaderProps> = ({ isLoading }) => {
    if (isLoading) {
        return <HeaderSkeleton />;
    }

    return (
        <HeaderWrapper>
            <div className="header-content">
                <SecurityIcon sx={{ fontSize: 40, color: '#0D95F9' }} />
                <MatrixRainText
                    text="Política de Privacidade"
                    className="title"
                />
            </div>
            <Typography variant="h5" className="subtitle">
                Auge Invest
            </Typography>
            <Typography variant="body1" className="description">
                Comprometidos com a transparência e segurança dos seus dados
                <br />
                Sua Segurança é Nosso Ativo Mais Valioso
            </Typography>
        </HeaderWrapper>
    );
};