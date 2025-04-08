// Variáveis de tema centralizadas para uso em styled components

// Espaçamento
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
};

// Bordas
export const borderRadius = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  circle: '50%',
};

// Sombras
export const shadows = {
  sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  md: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  lg: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  xl: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
};

// Tipografia
export const typography = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    md: '1rem',       // 16px
    lg: '1.25rem',    // 20px
    xl: '1.5rem',     // 24px
    xxl: '2rem',      // 32px
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
};

// Transições
export const transitions = {
  fast: '0.2s ease',
  medium: '0.3s ease',
  slow: '0.5s ease',
};

// Breakpoints
export const breakpoints = {
  xs: '0px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px',
};

// Função auxiliar para obter cor baseada no modo
export const getThemeColor = (theme: any, colorPath: string) => {
  const mode = theme.palette.mode;
  const parts = colorPath.split('.');
  
  // Importar customColors diretamente para evitar dependência circular
  const { customColors } = require('./palette');
  
  let color = customColors;
  for (let i = 0; i < parts.length - 1; i++) {
    color = color[parts[i]];
  }
  
  return color[parts[parts.length - 1]][mode];
};