import { Box, Typography, Divider } from '@mui/material';
import { SummaryContainer, SummaryItem } from './styled';

// Mock data - will be replaced with API data
const mockSummaryData = {
    real: {
        totalValue: 12500,
        invested: 10000,
        result: 2500,
        performance: 25
    },
    mock: {
        totalValue: 5800,
        invested: 5000,
        result: 800,
        performance: 16
    }
};

interface PositionSummaryProps {
    type: 'real' | 'mock';
}

export const PositionSummary = ({ type }: PositionSummaryProps) => {
    const data = mockSummaryData[type];

    return (
        <SummaryContainer>
            <Typography variant="h6" gutterBottom>Resumo</Typography>
            
            <SummaryItem>
                <Typography color="text.secondary">Patrimônio Total</Typography>
                <Typography variant="h6">
                    R$ {data.totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </Typography>
            </SummaryItem>

            <Divider sx={{ my: 2 }} />

            <SummaryItem>
                <Typography color="text.secondary">Total Investido</Typography>
                <Typography>
                    R$ {data.invested.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </Typography>
            </SummaryItem>

            <SummaryItem>
                <Typography color="text.secondary">Resultado</Typography>
                <Typography color={data.result >= 0 ? 'success.main' : 'error.main'}>
                    R$ {data.result.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </Typography>
            </SummaryItem>

            <SummaryItem>
                <Typography color="text.secondary">Rentabilidade</Typography>
                <Typography color={data.performance >= 0 ? 'success.main' : 'error.main'}>
                    {data.performance >= 0 ? '+' : ''}{data.performance}%
                </Typography>
            </SummaryItem>
        </SummaryContainer>
    );
};