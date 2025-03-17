import Link from 'next/link';
import { SupportContainer } from "./styled";
import { CustomButton } from "@/components/Custom/Button";

export const ContactSupport = () => {
    return (
        <SupportContainer>
            <h3 className="support-title">Não encontrou o que procurava?</h3>
            <p className="support-text">
                Nossa equipe de suporte está pronta para ajudar você
            </p>
            <Link href="/visitante/contato">
                <CustomButton
                    value="Contatar Suporte"
                    customColor="#0056b3"
                    textColor="#FFFFFF"
                />
            </Link>
        </SupportContainer>
    );
};