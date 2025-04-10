import { type FC } from 'react';
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import { HeaderSkeleton } from "./HeaderSkeleton";
import { HeaderContainer, HeaderIcon } from "./styled";

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
                <HeaderIcon />
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