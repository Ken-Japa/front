import { Stack, Typography } from "@mui/material";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import { HeaderSkeleton } from "./HeaderSkeleton";
import { HeaderContainer } from "./styled";

interface HeaderProps {
    isLoading: boolean;
}

export const Header = ({ isLoading }: HeaderProps) => {
    return (
        <HeaderContainer>
            {isLoading ? (
                <HeaderSkeleton />
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