import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const SaveReportContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
}));