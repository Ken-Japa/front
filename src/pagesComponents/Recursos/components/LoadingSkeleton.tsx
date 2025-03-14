import { Stack, Grid } from "@mui/material";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

export const LoadingSkeleton = () => (
    <Stack spacing={8} alignItems="center">
        <Stack spacing={3} alignItems="center">
            <ContentSkeleton />
            <ContentSkeleton type="text" />
        </Stack>

        <Grid container spacing={4} justifyContent="center">
            {Array(8).fill(0).map((_, index) => (
                <Grid item xs={12} md={6} lg={4} xl={3} key={index}>
                    <ContentSkeleton type="card" />
                </Grid>
            ))}
        </Grid>

        <ContentSkeleton />
    </Stack>
);