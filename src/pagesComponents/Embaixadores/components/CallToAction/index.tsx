import { Typography, Box, Stack } from "@mui/material";
import { CustomButton } from "@/components/Custom/Button";

export const CallToAction = () => {
    return (
        <Box className="mt-12 text-center">
            <Stack
                spacing={3}
                className="bg-black/40 backdrop-blur-sm p-8 rounded-lg"
                alignItems="center"
            >
                <Typography variant="body1" className="text-white/90">
                    Quer participar deste grupo seleto?
                </Typography>
                <Typography variant="h6" className="text-white">
                    Assine nosso plano Premium e ajude-nos a continuar inovando!
                </Typography>
                <CustomButton
                    value="Fazer parte"
                    customColor="#FFD700"
                    textColor="#000000"
                    className="mt-4 max-w-xs mx-auto"
                />
            </Stack>
        </Box>
    );
};