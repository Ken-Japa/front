import { styled } from "@mui/material/styles";

export const ConfiguracoesWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  minHeight: "100vh",
  width: "100%",
  "&::before": {
    content: '""',
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage:
      theme.palette.mode === "dark"
        ? 'url("/assets/images/background/Configuracoes-Dark.jpg")'
        : 'url("/assets/images/background/Configuracoes-Light.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center right",
    opacity: theme.palette.mode === "dark" ? 0.3 : 0.4,
    zIndex: -1,
    transition: "opacity 0.3s ease-in-out",
  },
}));
