import { Slider } from '@mui/material';
import PercentIcon from '@mui/icons-material/Percent';
import {
  SettingsCard,
  SettingsSectionHeader,
  SettingsSectionIcon,
  SettingsSectionTitle,
  SliderContainer,
  SliderLabel,
  SliderDescription
} from '../../styled';

interface AlertPreferencesProps {
  percentages: {
    buy: number;
    sell: number;
  };
  onPercentageChange: (type: 'buy' | 'sell') => (event: Event, newValue: number | number[]) => void;
}

export const AlertPreferences = ({ percentages, onPercentageChange }: AlertPreferencesProps) => {
  return (
    <SettingsCard>
      <SettingsSectionHeader>
        <SettingsSectionIcon>
          <PercentIcon />
        </SettingsSectionIcon>
        <SettingsSectionTitle variant="h4">Preferências de Alerta</SettingsSectionTitle>
      </SettingsSectionHeader>

      <SliderContainer>
        <SliderLabel gutterBottom>
          Alerta de Compra: {percentages.buy}%
        </SliderLabel>
        <Slider
          value={percentages.buy}
          onChange={onPercentageChange('buy')}
          min={1}
          max={20}
          step={1}
          marks={[
            { value: 1, label: '1%' },
            { value: 5, label: '5%' },
            { value: 10, label: '10%' },
            { value: 20, label: '20%' },
          ]}
          sx={{ color: 'success.main' }}
        />
        <SliderDescription variant="body2">
          Alerta quando o preço estiver a % do valor de alerta de compra
        </SliderDescription>
      </SliderContainer>

      <SliderContainer>
        <SliderLabel gutterBottom>
          Alerta de Venda: {percentages.sell}%
        </SliderLabel>
        <Slider
          value={percentages.sell}
          onChange={onPercentageChange('sell')}
          min={1}
          max={20}
          step={1}
          marks={[
            { value: 1, label: '1%' },
            { value: 5, label: '5%' },
            { value: 10, label: '10%' },
            { value: 20, label: '20%' },
          ]}
          sx={{ color: 'error.main' }}
        />
        <SliderDescription variant="body2">
          Alerta quando o preço estiver a % do valor de alerta de venda
        </SliderDescription>
      </SliderContainer>
    </SettingsCard>
  );
};