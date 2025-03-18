import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

export const EmpresaContainer = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-image: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? "url('/assets/images/background/Empresas-Detalhes-Dark.jpg')"
      : "url('/assets/images/background/Empresas-Detalhes-Light.jpg')"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  margin-top: -64px;
  padding-top: 64px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) =>
      theme.palette.mode === "dark"
        ? "rgba(0, 0, 0, 0.4)"
        : "rgba(255, 255, 255, 0.2)"};
    pointer-events: none;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;
export const ContentContainer = styled(Container)`
  padding-top: 24px;
  padding-bottom: 24px;
`;
interface TabPanelProps {
  value: string;
  index: string;
}

export const TabPanel = styled(Box)<TabPanelProps>`
  display: ${({ value, index }) => (value === index ? "flex" : "none")};
  flex-direction: column;
  gap: 24px;
  padding: 24px 0;
`;
