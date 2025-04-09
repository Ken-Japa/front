import { FormControlLabel, Switch } from '@mui/material';
import { DarkIcon, LightIcon } from '@/components/TrocarTema/styled';
import { useTheme } from '@/theme/ThemeContext';
import {
  SettingsCard,
  SettingsSectionHeader,
  SettingsSectionIcon,
  SettingsSectionTitle,
  SettingsControlContainer
} from '../../styled';

export const AppearanceSettings = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <SettingsCard>
      <SettingsSectionHeader>
        <SettingsSectionIcon>
          {isDarkMode ? <DarkIcon /> : <LightIcon />}
        </SettingsSectionIcon>
        <SettingsSectionTitle variant="h4">Aparência</SettingsSectionTitle>
      </SettingsSectionHeader>
      <SettingsControlContainer>
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
      </SettingsControlContainer>
    </SettingsCard>
  );
};