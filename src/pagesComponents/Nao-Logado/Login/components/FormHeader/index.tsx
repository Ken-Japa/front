import { MatrixRainText } from '@/components/Effects/MatrixRainText';
import { HeaderContainer, Title, Subtitle } from './styled';

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