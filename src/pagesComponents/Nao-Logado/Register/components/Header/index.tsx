import { type FC } from 'react';

import { MatrixRainText } from "@/components/Effects/MatrixRainText";

import { HeaderContainer } from "./styled";
import { HeaderSkeleton } from "./HeaderSkeleton";

interface RegisterHeaderProps {
    isLoading?: boolean;
}

export const RegisterHeader: FC<RegisterHeaderProps> = ({ isLoading }) => {
    if (isLoading) {
        return <HeaderSkeleton />;
    }

    return (
        <HeaderContainer>
            <MatrixRainText
                text="Crie sua conta"
                className="matrix-title"
            />
        </HeaderContainer>
    );
};