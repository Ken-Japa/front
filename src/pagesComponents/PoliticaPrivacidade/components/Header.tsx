import { Box, Typography } from "@mui/material";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import SecurityIcon from '@mui/icons-material/Security';

export const Header = () => {
    return (
        <Box className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
                <SecurityIcon sx={{ fontSize: 40, color: '#0D95F9' }} />
                <MatrixRainText
                    text="Política de Privacidade"
                    className="text-4xl font-bold text-[#0D95F9]"
                />
            </div>
            <Typography variant="h5" className="text-white mb-2">
                Auge Invest
            </Typography>
            <div className="flex justify-center mt-4">
                <Typography variant="body1" className="text-white/90 max-w-2xl text-center">
                    Comprometidos com a transparência e segurança dos seus dados <br />
                    Sua Segurança é Nosso Ativo Mais Valioso
                </Typography>
            </div>
        </Box>
    );
};