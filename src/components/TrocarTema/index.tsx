"use client";

import { Switch, FormControlLabel } from '@mui/material';
import { ThemeContainer, ThemeControlContainer, DarkIcon, LightIcon } from './styled';
import { useTheme } from '@/theme/ThemeContext';
import { ProfileInfo, ProfileLabel } from '@/pagesComponents/Logado/Perfil/styled';

export const ThemePreference = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <ThemeContainer>
            <ProfileInfo>
                <ProfileLabel>Preferência de Tema</ProfileLabel>
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
            </ProfileInfo>
        </ThemeContainer>
    );
};