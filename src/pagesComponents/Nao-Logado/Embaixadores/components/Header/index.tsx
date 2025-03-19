import { type FC } from 'react';

import { Typography } from "@mui/material";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

import { HeaderContainer } from "./styled";
import { HeaderSkeleton } from "./HeaderSkeleton";

interface HeaderProps {
    isLoading?: boolean;
}

const ICON_STYLES = {
    fontSize: 60,
    color: '#FFD700'
} as const;

const HEADER_TEXT = {
    title: "Hall da Fama",
    subtitle: "Nossos Embaixadores",
    description: "Agradecemos especialmente a estas pessoas que acreditaram em nosso trabalho e contribuíram para o crescimento e desenvolvimento da plataforma."
} as const;

export const Header: FC<HeaderProps> = ({ isLoading }) => {
    if (isLoading) {
        return <HeaderSkeleton />;
    }

    return (
        <HeaderContainer spacing={3}>
            <WorkspacePremiumIcon sx={ICON_STYLES} />
            <Typography variant="h2" className="text-[#FFD700] font-bold">
                {HEADER_TEXT.title}
            </Typography>
            <Typography variant="h5" className="text-white">
                {HEADER_TEXT.subtitle}
            </Typography>
            <Typography variant="h5" className="text-white/80 max-w-2xl">
                {HEADER_TEXT.description}
            </Typography>
        </HeaderContainer>
    );
};