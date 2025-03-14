import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import HelpIcon from '@mui/icons-material/Help';
import { HeaderContainer } from "./styled";

export const Header = () => {
    return (
        <HeaderContainer>
            <div className="header-icon-wrapper">
                <HelpIcon sx={{ fontSize: 40, color: '#0D95F9' }} />
                <MatrixRainText
                    text="Dúvidas Frequentes"
                    className="title"
                />
            </div>
            <p className="subtitle">
                Encontre respostas para as perguntas mais comuns sobre o Auge Invest
            </p>
        </HeaderContainer>
    );
};