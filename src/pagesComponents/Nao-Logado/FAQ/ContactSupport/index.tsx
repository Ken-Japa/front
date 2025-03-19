import { type FC } from 'react';
import Link from 'next/link';

import { CustomButton } from "@/components/Custom/Button";

import { SupportContainer } from "./styled";

const BUTTON_PROPS = {
    value: "Contatar Suporte",
    customColor: "#0056b3",
    textColor: "#FFFFFF"
} as const;

export const ContactSupport: FC = () => (
    <SupportContainer>
        <h3 className="support-title">Não encontrou o que procurava?</h3>
        <p className="support-text">
            Nossa equipe de suporte está pronta para ajudar você
        </p>
        <Link href="/visitante/contato">
            <CustomButton {...BUTTON_PROPS} />
        </Link>
    </SupportContainer>
);