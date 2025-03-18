import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const SearchContainer = styled(Box)`
    display: flex;
    align-items: center;
    
    .MuiTextField-root {
        min-width: 250px;
        background: ${({ theme }) => 
            theme.palette.mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.05)'
                : 'rgba(0, 0, 0, 0.02)'
        };
        border-radius: ${({ theme }) => theme.shape.borderRadius}px;
        
        .MuiOutlinedInput-root {
            &:hover .MuiOutlinedInput-notchedOutline {
                border-color: ${({ theme }) => theme.palette.primary.main};
            }
        }
    }
`;