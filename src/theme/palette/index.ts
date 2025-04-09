import { PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteColor {
    A100?: string;
    A200?: string;
    A400?: string;
  }

  interface SimplePaletteColorOptions {
    A100?: string;
    A200?: string;
    A400?: string;
  }
}

// Cores base comuns para ambos os temas
const baseColors = {
  primary: {
    main: "#0D95F9", // Azul principal da marca
    A100: "#7DC5FC", // Azul claro para hover e elementos secundários
    A200: "#0068BA", // Azul escuro para elementos ativos e destaques
    contrastText: "#FFFFFF", // Texto sobre fundo azul
  },
  secondary: {
    main: "#8411CC", // Roxo principal para elementos secundários
    A100: "#A45AD3", // Roxo claro para hover
    A200: "#510083", // Roxo escuro para elementos ativos
    contrastText: "#502E6C", // Texto sobre fundo roxo
  },
  info: {
    main: "#0D95F9", // Azul informativo
    A100: "#7DC5FC", // Azul claro para alertas informativos
    A200: "#0068BA", // Azul escuro para ícones informativos
    contrastText: "#004C86", // Texto sobre fundo azul informativo
  },
  warning: {
    main: "#FFA500", // Laranja para alertas
    A100: "#FCC052", // Laranja claro para hover em alertas
    A200: "#C98302", // Laranja escuro para elementos ativos
    contrastText: "#804D00", // Texto sobre fundo laranja
  },
  success: {
    main: "#4CAF50", // Verde para indicar sucesso e valores positivos
    A100: "#A5D6A7", // Verde claro para hover
    A200: "#2E7D32", // Verde escuro para elementos ativos
    contrastText: "#1B5E20", // Texto sobre fundo verde
  },
  error: {
    main: "#FF0000", // Vermelho para erros e valores negativos
    A100: "#F35D5D", // Vermelho claro para hover
    A200: "#B80404", // Vermelho escuro para elementos ativos
    contrastText: "#860000", // Texto sobre fundo vermelho
  },
};

// Paleta para o tema escuro
export const darkPalette: PaletteOptions = {
  mode: "dark",
  ...baseColors,
  text: {
    primary: "#FFFFFF", // Texto principal em fundo escuro
    secondary: "#B0BEC5", // Texto secundário em fundo escuro
  },
  background: {
    default: "#121212", // Fundo principal do tema escuro
    paper: "#1A2234", // Fundo de cards e elementos elevados
  },
  divider: "rgba(255, 255, 255, 0.12)", // Divisores em tema escuro
};

// Paleta para o tema claro
export const lightPalette: PaletteOptions = {
  mode: "light",
  ...baseColors,
  text: {
    primary: "#1A2234", // Texto principal em fundo claro
    secondary: "#637381", // Texto secundário em fundo claro
  },
  background: {
    default: "#F5F8FA", // Fundo principal do tema claro
    paper: "#FFFFFF", // Fundo de cards e elementos elevados
  },
  divider: "rgba(0, 0, 0, 0.12)", // Divisores em tema claro
};

// Cores personalizadas para componentes específicos
export const customColors = {
  // Cores para tabelas de opções
  callHeader: {
    light: "#e6f7ff", // Fundo de cabeçalho de call em tema claro
    dark: "#01579b", // Fundo de cabeçalho de call em tema escuro
    text: {
      light: "#003366", // Texto de cabeçalho de call em tema claro
      dark: "#ffffff", // Texto de cabeçalho de call em tema escuro
    },
  },
  putHeader: {
    light: "#fff0f5", // Fundo de cabeçalho de put em tema claro
    dark: "#7b1fa2", // Fundo de cabeçalho de put em tema escuro
    text: {
      light: "#660033", // Texto de cabeçalho de put em tema claro
      dark: "#ffffff", // Texto de cabeçalho de put em tema escuro
    },
  },
  strike: {
    light: "#f5f5f5", // Fundo de strike em tema claro
    dark: "#333333", // Fundo de strike em tema escuro
  },
  // Cores para cards
  cardBackground: {
    light: "#ffffff", // Fundo de card em tema claro
    dark: "rgba(255, 255, 255, 0.05)", // Fundo de card em tema escuro
  },
  cardBorder: {
    light: "#e0e0e0", // Borda de card em tema claro
    dark: "rgba(255, 255, 255, 0.1)", // Borda de card em tema escuro
  },
  // Efeitos hover
  hoverEffect: {
    light: "#f9f9f9", // Efeito hover em tema claro
    dark: "rgba(255, 255, 255, 0.08)", // Efeito hover em tema escuro
  },
  accordionTitle: {
    light: "#1A2234",
    dark: "#FFFFFF",
  },
  accordionBody: {
    light: "#637381",
    dark: "#FFFFFF",
  },
};
