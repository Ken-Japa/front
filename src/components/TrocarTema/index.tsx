"use client";

import { Switch, FormControlLabel } from '@mui/material';
import { 
  ThemeContainer, 
  ThemeControlContainer, 
  DarkIcon, 
  LightIcon,
  ThemeInfo,
  ThemeLabel 
} from './styled';
import { useTheme } from '@/theme/ThemeContext';

export const ThemePreference = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <ThemeContainer>
            <ThemeInfo>
                <ThemeLabel>Preferência de Tema</ThemeLabel>
                <ThemeControlContainer>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={isDarkMode}
                                onChange={toggleTheme}
                                color="primary"
                            />
                        }
                        label={isDarkMode ? 'Modo Escuro' : 'Modo Claro'}
                    />
                    {isDarkMode ? <DarkIcon /> : <LightIcon />}
                </ThemeControlContainer>
            </ThemeInfo>
        </ThemeContainer>
    );
};