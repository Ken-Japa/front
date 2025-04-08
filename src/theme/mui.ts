import { createTheme, Theme } from '@mui/material/styles';
import { darkPalette, lightPalette } from './palette';
import { components } from './components';
import { typography, borderRadius } from './variables';

// Configurações comuns para ambos os temas
const commonOptions = {
  typography: {
    fontFamily: typography.fontFamily,
    h1: {
      fontSize: typography.fontSizes.xxl,
      fontWeight: typography.fontWeights.bold,
    },
    h2: {
      fontSize: typography.fontSizes.xl,
      fontWeight: typography.fontWeights.bold,
    },
    h3: {
      fontSize: typography.fontSizes.lg,
      fontWeight: typography.fontWeights.medium,
    },
    h4: {
      fontSize: typography.fontSizes.md,
      fontWeight: typography.fontWeights.medium,
    },
    h5: {
      fontSize: typography.fontSizes.sm,
      fontWeight: typography.fontWeights.medium,
    },
    h6: {
      fontSize: typography.fontSizes.xs,
      fontWeight: typography.fontWeights.medium,
    },
    body1: {
      fontSize: typography.fontSizes.md,
    },
    body2: {
      fontSize: typography.fontSizes.sm,
    },
  },
  shape: {
    borderRadius: parseInt(borderRadius.sm),
  },
  components,
};

// Criar os temas
export const darkTheme: Theme = createTheme({
  ...commonOptions,
  palette: darkPalette,
});

export const lightTheme: Theme = createTheme({
  ...commonOptions,
  palette: lightPalette,
});
