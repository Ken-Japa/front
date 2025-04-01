import { styled } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';

export const GraficoContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3)
}));

export const GraficoHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}));

export const ChartWrapper = styled(Box)({
  height: 400
});