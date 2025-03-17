"use client";

import { createTheme, ThemeOptions } from '@mui/material/styles';

const commonOptions: ThemeOptions = {
  shape: {
    borderRadius: 8
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          padding: '8px 16px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          }
        },
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        }
      }
    },
  }
};

const darkTheme = createTheme({
  ...commonOptions,
  palette: {
    mode: 'dark',
    primary: {
      main: '#0D95F9',
      light: '#52BCFF',
      dark: '#0969A6',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#FF6B00',
      light: '#FF8B3D',
      dark: '#CC5500',
      contrastText: '#FFFFFF'
    },
    background: {
      default: '#000000',
      paper: 'rgba(19, 47, 76, 0.8)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  components: {
    ...commonOptions.components,
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(19, 47, 76, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.1)',
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(255,255,255,0.2)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255,255,255,0.3)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0D95F9',
            }
          }
        }
      }
    },
  }
});

const lightTheme = createTheme({
  ...commonOptions,
  palette: {
    mode: 'light',
    primary: {
      main: '#0D95F9',
      light: '#52BCFF',
      dark: '#0969A6',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#FF6B00',
      light: '#FF8B3D',
      dark: '#CC5500',
      contrastText: '#FFFFFF'
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: 'rgba(0, 0, 0, 0.7)',
    },
  },
  components: {
    ...commonOptions.components,
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0,0,0,0.2)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0,0,0,0.3)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0D95F9',
            }
          }
        }
      }
    },
  }
});

export { darkTheme, lightTheme };
