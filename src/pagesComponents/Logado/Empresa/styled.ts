import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

export const EmpresasContainer = styled(Box)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? "url('/assets/images/background/Empresas-Dark.jpg')"
      : "url('/assets/images/background/Empresas-Light.jpg')"};
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
        ? "rgba(0, 0, 0, 0.8)"
        : "rgba(255, 255, 255, 0.2)"};
    pointer-events: none;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

export const ContentContainer = styled(Container)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  margin-bottom: 64px;
`;

export const SearchBarWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 16px;
`;

export const VisualizationWrapper = styled(Box)`
  flex: 1;
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

export const ControlsWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(0, 0, 0, 0.02)"};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;

export const ContentPlaceholder = styled(Box)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-style: italic;
  background: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.02)"
      : "rgba(0, 0, 0, 0.01)"};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;
