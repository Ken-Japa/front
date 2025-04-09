import { type FC } from 'react';

import { Typography } from "@mui/material";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

import { HeaderContainer } from "./styled";
import { HeaderSkeleton } from "./HeaderSkeleton";
import { visitorColors } from "@/theme/palette/visitor";

interface HeaderProps {
    isLoading?: boolean;
}

const ICON_STYLES = {
    fontSize: 60,
    color: visitorColors.gold
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
            <Typography variant="h1" className="header-title">
                {HEADER_TEXT.title}
            </Typography>
            <Typography variant="h3" className="header-subtitle">
                {HEADER_TEXT.subtitle}
            </Typography>
            <Typography variant="h4" className="header-description">
                {HEADER_TEXT.description}
            </Typography>
        </HeaderContainer>
    );
};

export default Header;