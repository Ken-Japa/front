import { Typography, Box, Stack } from "@mui/material";

export const CallToAction = () => {
    return (
        <Box className="mt-12 text-center">
            <Stack spacing={2}>
                <Typography variant="body1" className="text-white/80">
                    Quer fazer parte deste grupo seleto?
                </Typography>
                <Typography variant="h6" className="text-[#0D95F9]">
                    Assine nosso plano Premium e ajude-nos a continuar inovando!
                </Typography>
            </Stack>
        </Box>
    );
};