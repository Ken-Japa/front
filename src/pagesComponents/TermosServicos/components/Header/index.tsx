import GavelIcon from '@mui/icons-material/Gavel';
import { Typography } from "@mui/material";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import { HeaderContainer } from "./styled";

export const Header = () => (
    <HeaderContainer>
        <div className="header-icon-container">
            <GavelIcon sx={{ fontSize: 40, color: "#0D95F9" }} />
            <MatrixRainText
                text="Termos de Serviço"
                className="text-white text-4xl font-bold"
            />
        </div>
        <Typography className="header-subtitle">
            Última atualização: 01 de Janeiro de 2024
        </Typography>
        <Typography className="header-description">
            Por favor, leia atentamente estes termos antes de utilizar nossos serviços
        </Typography>
    </HeaderContainer>
);