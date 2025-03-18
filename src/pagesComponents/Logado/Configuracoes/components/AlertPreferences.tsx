import { Box, Paper, Typography, Slider } from '@mui/material';
import PercentIcon from '@mui/icons-material/Percent';

interface AlertPreferencesProps {
    percentages: {
        buy: number;
        sell: number;
    };
    onPercentageChange: (type: 'buy' | 'sell') => (event: Event, newValue: number | number[]) => void;
}

export const AlertPreferences = ({ percentages, onPercentageChange }: AlertPreferencesProps) => {
    return (
        <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <PercentIcon sx={{ mr: 2 }} />
                <Typography variant="h6">Preferências de Alerta</Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
                <Typography gutterBottom>
                    Alerta de Compra: {percentages.buy}%
                </Typography>
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
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Alerta quando o preço estiver a % do valor de alerta de compra
                </Typography>
            </Box>

            <Box>
                <Typography gutterBottom>
                    Alerta de Venda: {percentages.sell}%
                </Typography>
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
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Alerta quando o preço estiver a % do valor de alerta de venda
                </Typography>
            </Box>
        </Paper>
    );
};