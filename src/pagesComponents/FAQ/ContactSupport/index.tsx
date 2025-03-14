import Link from 'next/link';
import { SupportContainer } from "./styled";

export const ContactSupport = () => {
    return (
        <SupportContainer>
            <h3 className="support-title">Não encontrou o que procurava?</h3>
            <p className="support-text">
                Nossa equipe de suporte está pronta para ajudar você
            </p>
            <Link href="/contato">
                <button className="support-button">
                    Contatar Suporte
                </button>
            </Link>
        </SupportContainer>
    );
};