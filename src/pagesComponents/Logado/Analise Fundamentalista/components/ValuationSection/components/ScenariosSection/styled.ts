import { styled, Box } from '@mui/material';

export const ScenarioContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    '& .MuiGrid-container': {
        marginBottom: theme.spacing(2)
    }
}));