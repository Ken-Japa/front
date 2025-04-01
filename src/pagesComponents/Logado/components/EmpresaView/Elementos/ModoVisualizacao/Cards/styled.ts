import { styled } from '@mui/material/styles';
import { Box, Card, Chip } from '@mui/material';

export const CardContainer = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6]
  }
}));

export const CardHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: 16
});

export const CodesContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8
});

export const CodeChip = styled(Chip)({
  height: 'auto',
  '& .MuiChip-label': {
    display: 'flex',
    padding: '4px 8px'
  }
});