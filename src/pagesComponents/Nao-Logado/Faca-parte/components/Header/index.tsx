import { type FC } from 'react';
import dynamic from 'next/dynamic';

import { Typography } from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';

import { HeaderContainer } from "./styled";
import { HeaderSkeleton } from "./HeaderSkeleton";
import { visitorColors } from "@/theme/palette/visitor";

interface HeaderProps {
    isLoading: boolean;
}

const ICON_STYLES = {
    fontSize: 40,
    color: visitorColors.primary
} as const;

const LOADING_TITLE = <Typography variant="h4" className="title">Junte-se ao Time</Typography>;

const DynamicMatrixRainText = dynamic(
    () => import('@/components/Effects/MatrixRainText').then(mod => ({
        default: mod.MatrixRainText
    })), {
    ssr: false,
    loading: () => LOADING_TITLE
}
);

export const Header: FC<HeaderProps> = ({ isLoading }) => {
    if (isLoading) {
        return <HeaderSkeleton />;
    }

    return (
        <HeaderContainer>
            <div className="header-content">
                <GroupsIcon sx={ICON_STYLES} />
                <DynamicMatrixRainText
                    text="Junte-se ao Time"
                    className="title"
                />
            </div>
            <Typography variant="h4" className="subtitle">
                Estamos sempre em busca de talentos apaixonados por inovação e mercado financeiro
            </Typography>
        </HeaderContainer>
    );
};