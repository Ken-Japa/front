import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const SearchContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 8px;

    .MuiTextField-root {
        margin-bottom: 8px;
    }

    .MuiList-root {
        max-height: 300px;
        overflow-y: auto;
    }
`;