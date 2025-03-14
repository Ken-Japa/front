import { Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { InfoContainer } from "./styled";

interface ContactInfoProps {
    isLoading: boolean;
}

export const ContactInfo = ({ isLoading }: ContactInfoProps) => {
    return (
        <InfoContainer spacing={3} flex={1}>
            {isLoading ? (
                <ContentSkeleton type="text" />
            ) : (
                <>
                    <div className="info-item">
                        <div className="info-header">
                            <EmailIcon className="info-icon" />
                            <Typography className="info-title">Email</Typography>
                        </div>
                        <Typography className="info-content">
                            contato@capitalauge.com.br
                        </Typography>
                    </div>
                    <div className="info-item">
                        <div className="info-header">
                            <LocationOnIcon className="info-icon" />
                            <Typography className="info-title">Localização</Typography>
                        </div>
                        <Typography className="info-content">
                            Minas Gerais, MG - Brasil
                        </Typography>
                    </div>
                    <div className="info-item">
                        <div className="info-header">
                            <PhoneIcon className="info-icon" />
                            <Typography className="info-title">Telefone</Typography>
                        </div>
                        <Typography className="info-content">
                            +55 (21) 99430-3047
                        </Typography>
                    </div>
                </>
            )}
        </InfoContainer>
    );
};