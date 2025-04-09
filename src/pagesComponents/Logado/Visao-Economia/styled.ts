import { styled } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';

export const BackgroundContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100%',
  background: theme.palette.background.default,
  backgroundImage: theme.palette.mode === 'dark' 
    ? 'linear-gradient(to bottom right, rgba(13, 149, 249, 0.05), rgba(132, 17, 204, 0.05))'
    : 'linear-gradient(to bottom right, rgba(13, 149, 249, 0.02), rgba(132, 17, 204, 0.02))',
  backgroundAttachment: 'fixed',
}));

export const DashboardItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.palette.mode === 'dark'
    ? '0 4px 20px rgba(0, 0, 0, 0.25)'
    : '0 2px 10px rgba(0, 0, 0, 0.05)',
  background: theme.palette.background.paper,
  backdropFilter: 'blur(10px)',
  transition: theme.transitions.create(['box-shadow', 'transform'], {
    duration: theme.transitions.duration.standard,
  }),
  '&:hover': {
    boxShadow: theme.palette.mode === 'dark'
      ? '0 6px 25px rgba(0, 0, 0, 0.3)'
      : '0 4px 15px rgba(0, 0, 0, 0.08)',
    transform: 'translateY(-2px)',
  },
}));
