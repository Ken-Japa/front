import { Stack, Typography } from "@mui/material";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { HeaderContainer } from "./styled";

interface HeaderProps {
    isLoading: boolean;
}

export const Header = ({ isLoading }: HeaderProps) => {
    return (
        <HeaderContainer>
            {isLoading ? (
                <ContentSkeleton 
                    type="text"
                    textLines={3}
                    className="p-4"
                />
            ) : (
                <Stack spacing={2}>
                    <MatrixRainText
                        text="Entre em Contato"
                        className="title"
                    />
                    <Typography variant="h6" className="subtitle">
                        Fale Com Quem Entende do Seu Dinheiro
                    </Typography>
                    <Typography variant="h6" className="subtitle">
                        Estamos aqui para ajudar. Entre em contato conosco!
                    </Typography>
                </Stack>
            )}
        </HeaderContainer>
    );
};