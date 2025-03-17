"use client";

import { Switch, FormControlLabel } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ThemeContainer } from './styled';
import { useTheme } from '@/theme/ThemeContext';
import { ProfileInfo, ProfileLabel } from '@/pagesComponents/Logado/Perfil/styled';

export const ThemePreference = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <ThemeContainer>
            <ProfileInfo>
                <ProfileLabel>Preferência de Tema</ProfileLabel>
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
            </ProfileInfo>
            {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
        </ThemeContainer>
    );
};