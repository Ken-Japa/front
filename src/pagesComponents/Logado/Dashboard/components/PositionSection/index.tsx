import { SuspenseWrapper } from '@/components/Feedback/SuspenseWrapper';
import { ContentSkeleton } from '@/components/Feedback/Skeletons/ContentSkeleton';
import { ProgressiveLoad } from '@/components/Feedback/ProgressiveLoad';

import { PerformanceChart } from './components/PerformanceChart';
import { PositionSummary } from './components/PositionSummary';
import { RecentActivities } from './components/RecentActivities';
import { PositionsList } from './components/PositionsList';
import { SectionTitle, StyledPaper, GridContainer, GridItem } from './styled';

interface PositionSectionProps {
    title: string;
    type: 'real' | 'mock';
}

export const PositionSection = ({ title, type }: PositionSectionProps) => {
    return (
        <div>
            <SectionTitle variant="h4">
                {title}
            </SectionTitle>

            <GridContainer container spacing={3}>
                {/* Gráfico */}
                <GridItem item xs={12} md={8}>
                    <StyledPaper>
                        <SuspenseWrapper fallback={<ContentSkeleton type="card" cardHeight={300} />}>
                            <ProgressiveLoad delay={0.3}>
                                <PerformanceChart type={type} />
                            </ProgressiveLoad>
                        </SuspenseWrapper>
                    </StyledPaper>
                </GridItem>

                {/* Cards Laterais */}
                <GridItem item xs={12} md={4}>
                    <GridContainer container spacing={3}>
                        <GridItem item xs={12}>
                            <StyledPaper>
                                <SuspenseWrapper fallback={<ContentSkeleton type="text" textLines={4} />}>
                                    <ProgressiveLoad delay={0.4}>
                                        <PositionSummary type={type} />
                                    </ProgressiveLoad>
                                </SuspenseWrapper>
                            </StyledPaper>
                        </GridItem>
                        <GridItem item xs={12}>
                            <StyledPaper>
                                <SuspenseWrapper fallback={<ContentSkeleton type="text" textLines={5} />}>
                                    <ProgressiveLoad delay={0.5}>
                                        <RecentActivities type={type} />
                                    </ProgressiveLoad>
                                </SuspenseWrapper>
                            </StyledPaper>
                        </GridItem>
                    </GridContainer>
                </GridItem>

                {/* Lista de Posições */}
                <GridItem item xs={12}>
                    <SuspenseWrapper fallback={<ContentSkeleton type="card" cardHeight={200} />}>
                        <ProgressiveLoad delay={0.6}>
                            <PositionsList type={type} />
                        </ProgressiveLoad>
                    </SuspenseWrapper>
                </GridItem>
            </GridContainer>
        </div>
    );
};