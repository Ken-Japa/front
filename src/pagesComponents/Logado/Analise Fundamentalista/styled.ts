import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const AnalysisContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));