import { type FC } from 'react';

import HelpIcon from '@mui/icons-material/Help';

import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import { visitorColors } from "@/theme/palette/visitor";

import { HeaderContainer } from "./styled";
import { HeaderSkeleton } from "./HeaderSkeleton";

const ICON_STYLES = {
    fontSize: 40,
    color: visitorColors.primary
} as const;

interface HeaderProps {
    isLoading?: boolean;
}

export const Header: FC<HeaderProps> = ({ isLoading }) => {
    if (isLoading) {
        return <HeaderSkeleton />;
    }

    return (
        <HeaderContainer>
            <div className="header-icon-wrapper">
                <HelpIcon sx={ICON_STYLES} />
                <MatrixRainText
                    text="Dúvidas Frequentes"
                    className="title"
                />
            </div>
            <p className="subtitle">
                Encontre respostas para as perguntas mais comuns sobre a Auge Invest
            </p>
        </HeaderContainer>
    );
};