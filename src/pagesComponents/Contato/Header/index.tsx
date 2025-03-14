import { Stack, Typography } from "@mui/material";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

interface HeaderProps {
    isLoading: boolean;
}

export const Header = ({ isLoading }: HeaderProps) => {
    return (
        <div className="text-center">
            {isLoading ? (
                <ContentSkeleton />
            ) : (
                <Stack spacing={2}>
                    <MatrixRainText
                        text="Entre em Contato"
                        className="text-4xl font-bold text-white"
                    />
                    <Typography variant="h6" className="text-white/90">
                        Fale Com Quem Entende do Seu Dinheiro
                    </Typography>
                    <Typography variant="h6" className="text-white/90">
                        Estamos aqui para ajudar. Entre em contato conosco!
                    </Typography>
                </Stack>
            )}
        </div>
    );
};