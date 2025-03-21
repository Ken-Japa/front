import { Grid } from '@mui/material';
import { DadosAnaliseFundamental } from '../../types';
import { MetricCard } from './components/MetricCard';
import { FIELD_LABELS } from './constants/constants';
import { calculateMetrics } from './constants/metrics';
import { metricCategories } from './constants/categories';
import { CategoryContainer, CategoryTitle, MetricsGrid } from './styled';

export const MetricsDisplay = ({ data }: { data: DadosAnaliseFundamental }) => {
    const getFieldLabel = (field: keyof DadosAnaliseFundamental): string =>
        FIELD_LABELS[field] || field;

    const metrics = calculateMetrics(data, getFieldLabel);
    const categories = metricCategories(metrics);

    return (
        <Grid container spacing={3}>
            {categories.map((category, idx) => (
                <CategoryContainer item xs={12} key={idx}>
                    <CategoryTitle variant="h6" gutterBottom>
                        {category.title}
                    </CategoryTitle>
                    <MetricsGrid container spacing={2}>
                        {category.metrics.map((metric, metricIdx) => (
                            <MetricCard key={metricIdx} {...metric} />
                        ))}
                    </MetricsGrid>
                </CategoryContainer>
            ))}
        </Grid>
    );
};