import { Grid, Typography } from "@mui/material";
import { FeatureCard } from "../styled";
import { FEATURES } from "../constants/features";

interface FeaturesGridProps {
    hoveredCard: number | null;
    setHoveredCard: (index: number | null) => void;
}

export const FeaturesGrid = ({ hoveredCard, setHoveredCard }: FeaturesGridProps) => (
    <Grid container spacing={4} justifyContent="center">
        {FEATURES.map((feature, index) => (
            <Grid item xs={12} md={6} lg={4} xl={3} key={index}>
                <FeatureCard
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="transition-all duration-300 hover:scale-105"
                >
                    <div className="icon-container text-[#0D95F9]">
                        {feature.icon}
                    </div>
                    <Typography
                        variant="h6"
                        className="feature-title mb-3"
                    >
                        {feature.title}
                    </Typography>
                    <Typography
                        variant="body1"
                        className="feature-description mb-4"
                    >
                        {feature.description}
                    </Typography>
                    {hoveredCard === index && (
                        <ul className="text-sm space-y-2 text-white/85">
                            {feature.details.map((detail, idx) => (
                                <li key={idx} className="flex items-center">
                                    <span className="w-2 h-2 bg-[#0D95F9] rounded-full mr-2"></span>
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    )}
                </FeatureCard>
            </Grid>
        ))}
    </Grid>
);