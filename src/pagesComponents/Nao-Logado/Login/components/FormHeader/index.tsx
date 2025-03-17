import { HeaderContainer, Title, Subtitle } from './styled';
import { MatrixRainText } from '@/components/Effects/MatrixRainText';

export const FormHeader = () => {
    return (
        <HeaderContainer>
            <Title>
                <MatrixRainText
                    text="Bem-vindo de volta"
                    className="matrix-title"
                />
            </Title>
            <Subtitle>
                Entre com suas credenciais para acessar sua conta
            </Subtitle>
        </HeaderContainer>
    );
};