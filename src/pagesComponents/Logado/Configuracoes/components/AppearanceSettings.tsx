import { Box, Paper, Typography, FormControlLabel, Switch } from '@mui/material';
import { ThemeControlContainer, DarkIcon, LightIcon } from '@/components/TrocarTema/styled';
import { useTheme } from '@/theme/ThemeContext';

export const AppearanceSettings = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <Paper sx={{ p: 3, mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ mr: 2 }}>
                    {isDarkMode ? <DarkIcon /> : <LightIcon />}
                </Box>
                <Typography variant="h6">Aparência</Typography>
            </Box>
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
            </ThemeControlContainer>
        </Paper>
    );
};