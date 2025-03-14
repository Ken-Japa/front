import { Box, Typography } from "@mui/material";
import GavelIcon from '@mui/icons-material/Gavel';
import { MatrixRainText } from "@/components/Effects/MatrixRainText";

export const Header = () => (
    <Box className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
            <GavelIcon sx={{ fontSize: 40, color: '#0D95F9' }} />
            <MatrixRainText
                text="Termos de Serviço"
                className="text-4xl font-bold text-[#0D95F9]"
            />
        </div>
        <Typography variant="h5" className="text-white/80 mb-2">
            Auge Invest
        </Typography>
        <div className="flex justify-center mt-4">
            <Typography variant="body1" className="text-white/80 max-w-2xl text-center">
                Por favor, leia atentamente nossos termos de serviço
            </Typography>
        </div>
    </Box>
);