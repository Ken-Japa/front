import { styled } from '@mui/material';

export const BlockTimerContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2),
    padding: theme.spacing(4),
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.error.main
}));