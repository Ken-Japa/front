import { Box, Typography } from '@mui/material';

interface LineChartProps {
    data: any[];
    loading: boolean;
}

export const LineChart = ({ loading }: LineChartProps) => {
    return (
        <Box 
            sx={{ 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                bgcolor: 'background.paper',
                borderRadius: 1
            }}
        >
            <Typography color="text.secondary" variant="body1">
                Gráfico será implementado em breve
            </Typography>
        </Box>
    );
};