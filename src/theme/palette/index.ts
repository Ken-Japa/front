import { PaletteOptions } from "@mui/material";

// Cores base comuns para ambos os temas
const baseColors = {
  primary: {
    main: "#0D95F9", // Azul característico
    A100: "#7DC5FC", // Versão mais clara
    A200: "#0068BA", // Versão mais escura
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#8411CC",
    A100: "#A45AD3",
    A200: "#510083",
    contrastText: "#502E6C",
  },
  info: {
    main: "#0D95F9",
    A100: "#7DC5FC",
    A200: "#0068BA",
    contrastText: "#004C86",
  },
  warning: {
    main: "#FFA500",
    A100: "#FCC052",
    A200: "#C98302",
    contrastText: "#804D00",
  },
  success: {
    main: "#858080",
    A100: "#D9D9D9",
    A200: "#444444",
    contrastText: "#444444",
  },
  error: {
    main: "#FF0000",
    A100: "#F35D5D",
    A200: "#B80404",
    contrastText: "#860000",
  },
};

// Paleta para o tema escuro
export const darkPalette: PaletteOptions = {
  mode: "dark",
  ...baseColors,
  text: {
    primary: "#FFFFFF",
    secondary: "#B0BEC5",
  },
  background: {
    default: "#121212",
    paper: "#1A2234",
  },
  divider: "rgba(255, 255, 255, 0.12)",
};

// Paleta para o tema claro
export const lightPalette: PaletteOptions = {
  mode: "light",
  ...baseColors,
  text: {
    primary: "#1A2234",
    secondary: "#637381",
  },
  background: {
    default: "#F5F8FA",
    paper: "#FFFFFF",
  },
  divider: "rgba(0, 0, 0, 0.12)",
};

// Cores personalizadas para componentes específicos
export const customColors = {
  // Cores para tabelas de opções
  callHeader: {
    light: "#e6f7ff",
    dark: "#01579b",
    text: {
      light: "#003366",
      dark: "#ffffff",
    },
  },
  putHeader: {
    light: "#fff0f5",
    dark: "#7b1fa2",
    text: {
      light: "#660033",
      dark: "#ffffff",
    },
  },
  strike: {
    light: "#f5f5f5",
    dark: "#333333",
  },
  // Cores para cards
  cardBackground: {
    light: "#ffffff",
    dark: "rgba(255, 255, 255, 0.05)",
  },
  cardBorder: {
    light: "#e0e0e0",
    dark: "rgba(255, 255, 255, 0.1)",
  },
  // Efeitos hover
  hoverEffect: {
    light: "#f9f9f9",
    dark: "rgba(255, 255, 255, 0.08)",
  },
};
