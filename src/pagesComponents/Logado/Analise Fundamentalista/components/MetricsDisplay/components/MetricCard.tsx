import { Grid, Typography, Paper, Tooltip } from '@mui/material';
import { MetricCardProps } from '../types/types';
import { FormulaText } from '../styled';
import { formatMetricValue } from '../utils/utils';

export const MetricCard = ({ title, value, formula, description, missingFields = [], type }: MetricCardProps) => (
    <Grid item xs={12} sm={6}>
        <Tooltip title={
            missingFields.length > 0
                ? `Preencha os campos: ${missingFields.join(', ')}`
                : <span>
                    {description}
                    <br />
                    <FormulaText>Fórmula: {formula}</FormulaText>
                </span>
        }>
            <Paper
                sx={{
                    p: 2,
                    height: '100%',
                    cursor: 'pointer',
                    bgcolor: missingFields.length > 0 ? 'action.disabledBackground' : 'background.paper'
                }}
            >
                <Typography variant="subtitle2" color="text.secondary">
                    {title}
                </Typography>
                <Typography variant="h6">
                    {missingFields.length > 0 ? '---' : formatMetricValue(value, type)}
                </Typography>
            </Paper>
        </Tooltip>
    </Grid>
);