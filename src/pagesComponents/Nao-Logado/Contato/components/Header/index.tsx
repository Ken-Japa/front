import { type FC } from 'react';

import { Stack } from "@mui/material";

import { MatrixRainText } from "@/components/Effects/MatrixRainText";

import { HeaderSkeleton } from "./HeaderSkeleton";
import { HeaderContainer, SubtitleText } from "./styled";

interface HeaderProps {
    isLoading: boolean;
}

const headerContent = {
    title: "Entre em Contato",
    subtitles: [
        "Estamos aqui para ajudar. Entre em contato conosco!"
    ]
} as const;

export const Header: FC<HeaderProps> = ({ isLoading }) => {
    if (isLoading) {
        return (
            <HeaderContainer>
                <HeaderSkeleton />
            </HeaderContainer>
        );
    }

    return (
        <HeaderContainer>
            <Stack spacing={2}>
                <MatrixRainText
                    text={headerContent.title}
                    className="title"
                    fontSize="2.5rem"
                />
                {headerContent.subtitles.map((text, index) => (
                    <SubtitleText
                        key={index}
                        variant="h6"
                        className="subtitle"
                    >
                        {text}
                    </SubtitleText>
                ))}
            </Stack>
        </HeaderContainer>
    );
};