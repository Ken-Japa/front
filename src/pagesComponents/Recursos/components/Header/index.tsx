import { Typography } from "@mui/material";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import { HeaderContainer } from "./styled";
import { HeaderSkeleton } from "./HeaderSkeleton";

interface HeaderProps {
    isLoading?: boolean;
}
export const Header = ({ isLoading }: HeaderProps) => {
    if (isLoading) {
        return <HeaderSkeleton />;
    }
    return (
        <HeaderContainer>
            <MatrixRainText
                text="Recursos Avançados"
                className="header-title"
            />
            <Typography className="header-subtitle">
                Descubra como nossa plataforma pode transformar sua experiência de investimento com ferramentas poderosas e insights valiosos
            </Typography>
        </HeaderContainer>
    );
};