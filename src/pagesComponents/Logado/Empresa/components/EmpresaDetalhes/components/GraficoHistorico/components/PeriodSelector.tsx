import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

export type PeriodType = '1M' | '6M' | '1A' | '5A' | 'MAX';

interface PeriodSelectorProps {
  value: PeriodType;
  onChange: (period: PeriodType) => void;
}

export const PeriodSelector: React.FC<PeriodSelectorProps> = ({ value, onChange }) => {
  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={(_, newPeriod) => newPeriod && onChange(newPeriod)}
      size="small"
    >
      <ToggleButton value="1M">1M</ToggleButton>
      <ToggleButton value="6M">6M</ToggleButton>
      <ToggleButton value="1A">1A</ToggleButton>
      <ToggleButton value="5A">5A</ToggleButton>
      <ToggleButton value="MAX">MAX</ToggleButton>
    </ToggleButtonGroup>
  );
};