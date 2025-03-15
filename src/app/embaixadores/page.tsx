import Ambassadors from "@/pagesComponents/Embaixadores";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Embaixadores| Auge Invest",
    description: "Os Embaixadores da plataforma. Obrigado pelo suporte e patrocínio",
    openGraph: {
        title: 'Embaixadores | Auge Invest',
        description: 'Faça parte dessa comunidade',
        images: [
            {
                url: '/assets/images/background/Contato.jpg',
                width: 1120,
                height: 1120,
                alt: 'Embaixadores Auge Invest'
            }
        ],
    },
    keywords: 'embaixadores, patrocínio, AugeInvest, investimentos, agradecimentos',
    alternates: {
        canonical: 'https://augeinvest.com.br/embaixadores'
    }
};

export default function AmbassadorsPage() {
    return <Ambassadors />;
}