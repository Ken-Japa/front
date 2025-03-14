import { Stack, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

interface ContactInfoProps {
    isLoading: boolean;
}

export const ContactInfo = ({ isLoading }: ContactInfoProps) => {
    return (
        <Stack spacing={3} flex={1}>
            {isLoading ? (
                <ContentSkeleton type="text" />
            ) : (
                <>
                    <div>
                        <Stack direction="row" spacing={2} alignItems="center" mb={1}>
                            <EmailIcon sx={{ color: '#0D95F9' }} />
                            <Typography variant="h6" className="text-white">Email</Typography>
                        </Stack>
                        <Stack direction="column" spacing={2} mb={1}>
                            <Typography className="text-white/95">contato@capitalauge.com.br</Typography>
                        </Stack>
                    </div>
                    <div>
                        <Stack direction="row" spacing={2} alignItems="center" mb={1}>
                            <LocationOnIcon sx={{ color: '#0D95F9' }} />
                            <Typography variant="h6" className="text-white">Localização</Typography>
                        </Stack>
                        <Typography className="text-white/95">Minas Gerais, MG - Brasil</Typography>
                    </div>
                    <div>
                        <Stack direction="row" spacing={2} alignItems="center" mb={1}>
                            <PhoneIcon sx={{ color: '#0D95F9' }} />
                            <Typography variant="h6" className="text-white">Telefone</Typography>
                        </Stack>
                        <Typography className="text-white/95">+55 (21) 99430-3047</Typography>
                    </div>
                </>
            )}
        </Stack>
    );
};