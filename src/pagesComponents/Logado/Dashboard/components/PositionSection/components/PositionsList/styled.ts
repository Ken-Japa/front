import { styled } from '@mui/material/styles';
import { Box, TableFooter as MuiTableFooter } from '@mui/material';

export const PositionsContainer = styled(Box)`
    width: 100%;
`;

export const PositionHeader = styled(Box)`
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
`;

export const TableFooter = styled(MuiTableFooter)`
    background-color: ${({ theme }) => 
        theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.05)'
            : 'rgba(0, 0, 0, 0.02)'
    };
    font-weight: bold;
`;