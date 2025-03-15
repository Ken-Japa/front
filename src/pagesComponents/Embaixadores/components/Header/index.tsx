import { Typography } from "@mui/material";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { HeaderContainer } from "./styled";

export const Header = () => {
    return (
        <HeaderContainer spacing={3}>
            <WorkspacePremiumIcon sx={{ fontSize: 60 }} className="text-[#FFD700]" />
            <Typography variant="h2" className="text-[#FFD700] font-bold">
                Hall da Fama
            </Typography>
            <Typography variant="h5" className="text-white">
                Nossos Embaixadores
            </Typography>
            <Typography variant="h5" className="text-white/80 max-w-2xl">
                Agradecemos especialmente a estas pessoas que acreditaram em nosso trabalho e
                contribuíram para o crescimento e desenvolvimento da plataforma.
            </Typography>
        </HeaderContainer>
    );
};