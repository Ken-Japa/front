import { Tooltip, IconButton, Divider } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { SectionTitle, SectionContainer } from '../styled';
import { FormSectionProps } from '../types/types';

export const FormSection = ({ title, description, children }: FormSectionProps) => (
    <SectionContainer item xs={12}>
        <SectionTitle variant="h4" gutterBottom>
            {title}
            <Tooltip title={description}>
                <IconButton size="small">
                    <InfoIcon fontSize="small" />
                </IconButton>
            </Tooltip>
        </SectionTitle>
        {children}
        <Divider sx={{ my: 3 }} />
    </SectionContainer>
);