"use client";
import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      // Verde
      main: "#00FB0A",
      A100: "#58FF7A",
      A200: "#01A006",
      contrastText: "#005203",
    },
    secondary: {
      // Roxo
      main: "#8411CC",
      A100: "#A45AD3",
      A200: "#510083",
      contrastText: "#502E6C",
    },
    info: {
      // Azul
      main: "#0D95F9",
      A100: "#7DC5FC",
      A200: "#0068BA",
      contrastText: "#004C86",
    },
    warning: {
      // Laranja
      main: "#FFA500",
      A100: "#FCC052",
      A200: "#C98302",
      contrastText: "#804D00",
    },
    success: {
      // Cinza
      main: "#858080",
      A100: "#D9D9D9",
      A200: "#444444",
      contrastText: "#444444",
    },
    error: {
      // Vermelho Danger Alert
      main: "#FF0000",
      A100: "#F35D5D",
      A200: "#B80404",
      contrastText: "#860000",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "0D95F9",
      disabled: "#444444",
    },
    background: {
      default: "#000000",
      paper: "#FFFFFF",
    },
    divider: "#004C86",
    action: {
      active: "#00FB0A",
      hover: "#005203",
      selected: "#8411CC",
      disabled: "#444444",
      disabledBackground: "#444444",
    },
    contrastThreshold: 4.5,
    tonalOffset: 0.3,
  },

  //typography: { }
});

const lightTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      // Azul
      main: "#2C87CF",
      A100: "#0D95F9",
      A200: "#1E6BA7",
      contrastText: "#004C86",
    },
    secondary: {
      // Laranja
      main: "#FFA500",
      A100: "#FFBE46",
      A200: "#C78306",
      contrastText: "#804D00",
    },
    info: {
      // Cinza
      main: "#6A6A6A",
      A100: "#ACA9A9",
      A200: "#444444",
      contrastText: "#444444",
    },
    warning: {
      // Roxo
      main: "#8411CC",
      A100: "#A248DC",
      A200: "#6805A5",
      contrastText: "#502E6C",
    },
    success: {
      // Verde
      main: "#02BB0A",
      A100: "#54D86F",
      A200: "#019506",
      contrastText: "#005203",
    },
    error: {
      // Vermelho Danger Alert
      main: "#E70000",
      A100: "#FC4444",
      A200: "#CB0808",
      contrastText: "#860000",
    },
    text: {
      primary: "#000000",
      secondary: "8411CC",
      disabled: "#6A6A6A",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF", //
    },
    divider: "#004C86",
    action: {
      active: "#00FB0A",
      hover: "#005203",
      selected: "#8411CC",
      disabled: "#444444",
      disabledBackground: "#444444",
    },
    contrastThreshold: 4.5,
    tonalOffset: 0.3,
  },

  //typography: { }
});

export { darkTheme, lightTheme };
