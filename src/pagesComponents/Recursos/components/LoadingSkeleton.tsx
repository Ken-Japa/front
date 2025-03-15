import { Stack, Grid } from "@mui/material";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

export const LoadingSkeleton = () => (
    <Stack spacing={8} alignItems="center">
        <Stack spacing={3} alignItems="center">
            <ContentSkeleton 
                type="text"
                textLines={2}
                className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm"
            />
            <ContentSkeleton 
                type="text"
                textLines={3}
                className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm"
            />
        </Stack>

        <Grid container spacing={4} justifyContent="center">
            {Array(8).fill(0).map((_, index) => (
                <Grid item xs={12} md={6} lg={4} xl={3} key={index}>
                    <ContentSkeleton 
                        type="card"
                        cardHeight={350}
                        className="bg-[#ffffff0a] backdrop-blur-sm"
                    />
                </Grid>
            ))}
        </Grid>

        <ContentSkeleton 
            type="text"
            textLines={2}
            className="p-4 bg-[#ffffff0a] rounded-lg backdrop-blur-sm"
        />
    </Stack>
);