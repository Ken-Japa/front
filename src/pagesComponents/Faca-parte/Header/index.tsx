import { Typography } from "@mui/material";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import GroupsIcon from '@mui/icons-material/Groups';
import { HeaderContainer } from "./styled";
import { HeaderSkeleton } from "./HeaderSkeleton";
import dynamic from 'next/dynamic';

interface HeaderProps {
    isLoading: boolean;
}

const DynamicMatrixRainText = dynamic(() => import('@/components/Effects/MatrixRainText').then(mod => ({ 
    default: mod.MatrixRainText 
})), {
    ssr: false,
    loading: () => <Typography variant="h4" className="title">Junte-se ao Time</Typography>
});

export const Header = ({ isLoading }: HeaderProps) => {
    if (isLoading) {
        return <HeaderSkeleton />;
    }

    return (
        <HeaderContainer>
            <div className="header-content">
                <GroupsIcon sx={{ fontSize: 40, color: '#0D95F9' }} />
                <DynamicMatrixRainText
                    text="Junte-se ao Time"
                    className="title"
                />
            </div>
            <Typography variant="h6" className="subtitle">
                Estamos sempre em busca de talentos apaixonados por inovação e mercado financeiro
            </Typography>
        </HeaderContainer>
    );
};