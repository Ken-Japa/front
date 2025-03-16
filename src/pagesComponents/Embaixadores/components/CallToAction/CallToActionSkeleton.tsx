import { Box, Stack, Skeleton } from "@mui/material";

export const CallToActionSkeleton = () => {
    return (
        <Box className="mt-12 text-center">
            <Stack
                spacing={3}
                className="bg-black/40 backdrop-blur-sm p-8 rounded-lg"
                alignItems="center"
            >
                <Skeleton variant="text" width={200} height={24} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
                <Skeleton variant="text" width={300} height={32} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
                <Skeleton variant="rectangular" width={200} height={40} sx={{ bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 1 }} />
            </Stack>
        </Box>
    );
};