import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const TableWrapper = styled(Box)`
    background-color: ${({ theme }) => theme.palette.background.paper};
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
    box-shadow: ${({ theme }) => theme.shadows[1]};
    overflow: hidden;

    .MuiTableCell-root {
        padding: 16px;
    }

    .MuiTableHead-root {
        background-color: ${({ theme }) => theme.palette.mode === 'dark' 
            ? theme.palette.grey[800] 
            : theme.palette.grey[100]
        };

        .MuiTableCell-root {
            font-weight: 600;
            color: ${({ theme }) => theme.palette.text.primary};
        }
    }

    .MuiTableBody-root {
        .MuiTableRow-root {
            &:hover {
                background-color: ${({ theme }) => theme.palette.action.hover};
            }
        }

        .MuiTableCell-root {
            border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
        }
    }
`;