import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';

export const EmpresaContainer = styled(Container)`
    padding-top: 24px;
    padding-bottom: 24px;
`;

interface TabPanelProps {
    value: string;
    index: string;
}

export const TabPanel = styled(Box)<TabPanelProps>`
    display: ${({ value, index }) => value === index ? 'flex' : 'none'};
    flex-direction: column;
    gap: 24px;
    padding: 24px 0;
`;