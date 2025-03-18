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
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                    {isDarkMode ? (
                        <DarkModeIcon sx={{ color: '#4FC3F7' }} /> 
                    ) : (
                        <LightModeIcon sx={{ color: '#FFB74D' }} />
                    )}
                </div>
            </ProfileInfo>
        </ThemeContainer>
    );
};