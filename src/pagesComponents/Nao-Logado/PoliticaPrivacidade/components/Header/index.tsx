import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import { Typography } from "@mui/material";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import { HeaderContainer } from "./styled";
import { HeaderSkeleton } from "./HeaderSkeleton";
import { visitorColors } from "@/theme/palette/visitor";

interface HeaderProps {
  isLoading?: boolean;
}

export const Header = ({ isLoading }: HeaderProps) => {
  if (isLoading) {
    return <HeaderSkeleton />;
  }

  return (
    <HeaderContainer>
      <div className="header-icon-container">
        <PrivacyTipIcon sx={{ fontSize: 40, color: visitorColors.primary }} />
        <MatrixRainText
          text="Política de Privacidade"
          className="text-white text-4xl font-bold"
        />
      </div>
      <Typography className="header-subtitle">
        Última atualização: 01 de Janeiro de 2024
      </Typography>
      <Typography className="header-description">
        Por favor, leia atentamente nossa política de privacidade para entender como tratamos seus dados
      </Typography>
    </HeaderContainer>
  );
};