import { type FC } from 'react';
import { Typography } from "@mui/material";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import { HeaderContainer } from "./styled";

export const RegisterHeader: FC = () => {
  return (
    <HeaderContainer>
      <MatrixRainText
        text="Criar Conta"
        className="matrix-title"
      />
      <Typography variant="body1" className="header-subtitle">
        Junte-se à nossa comunidade e comece a explorar
      </Typography>
    </HeaderContainer>
  );
};

export default RegisterHeader;