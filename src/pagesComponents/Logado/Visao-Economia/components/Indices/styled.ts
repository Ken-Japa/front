import { styled } from '@mui/material/styles';
import { Box, Tab } from '@mui/material';

export const IndicesContainer = styled(Box)`
    width: 100%;
    height: 100%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
`;

export const TabsContainer = styled(Box)`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => 
        theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.1)'
    };
    padding: 0 8px;
`;

export const ChartContainer = styled(Box)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.palette.text.secondary};
    font-style: italic;
`;

export const CustomTab = styled(Tab)`
    text-transform: none;
    min-height: 48px;
    padding: 0 16px;
`;

export const TabActions = styled(Box)`
    display: flex;
    align-items: center;
    gap: 8px;
`;