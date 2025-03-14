import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import HelpIcon from '@mui/icons-material/Help';

export const Header = () => {
    return (
        <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
                <HelpIcon sx={{ fontSize: 40, color: '#0D95F9' }} />
                <MatrixRainText
                    text="Dúvidas Frequentes"
                    className="text-4xl font-bold text-[#0D95F9]"
                />
            </div>
            <p className="text-white/90 mt-4">
                Encontre respostas para as perguntas mais comuns sobre o Auge Invest
            </p>
        </div>
    );
};