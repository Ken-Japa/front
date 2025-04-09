import React from 'react';
import { Grid, Typography, Divider } from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
import { InfoSection, SectionTitle, ItemList } from './styled';

interface FatosRelevantesProps {
    fatos: string[];
}

export const FatosRelevantes: React.FC<FatosRelevantesProps> = ({ fatos }) => {
    if (!fatos || fatos.length === 0) return null;

    return (
        <InfoSection elevation={1}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <SectionTitle variant="h4">
                        <TimelineIcon sx={{ color: theme => theme.palette.primary.light }} />
                        Fatos Relevantes
                    </SectionTitle>
                    <Divider sx={{ my: 1.5, opacity: 0.2 }} />
                    <ItemList component="ul">
                        {fatos.slice(0, 3).map((fato, index) => (
                            <Typography component="li" variant="body2" key={index}>
                                {fato}
                            </Typography>
                        ))}
                    </ItemList>
                </Grid>
            </Grid>
        </InfoSection>
    );
};