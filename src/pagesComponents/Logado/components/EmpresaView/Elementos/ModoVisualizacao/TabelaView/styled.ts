import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const TableContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  width: '100%',
  padding: theme.spacing(2),
  '& .MuiPaper-root': {
    background: theme.palette.mode === 'dark' 
      ? 'rgba(0, 0, 0, 0.85)' 
      : 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(10px)',
  },
  '& .MuiTableCell-root': {
    borderColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.1)',
  }
}));