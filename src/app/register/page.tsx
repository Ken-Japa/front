import { Register } from "@/pagesComponents/Register";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Criar Conta | Auge Invest',
    description: 'Crie sua conta gratuita na Auge Invest. Acesse ferramentas avançadas de análise e tome decisões mais inteligentes em seus investimentos.',
    openGraph: {
        title: 'Criar Conta | Auge Invest',
        description: 'Comece sua jornada de investimentos inteligentes',
        images: [
            {
                url: '/assets/images/background/REGISTER.jpg',
                width: 1368,
                height: 768,
                alt: 'Registro Auge Invest'
            }
        ],
    },
    keywords: 'criar conta, registro, cadastro, investimentos, análise financeira',
    robots: {
        index: false,
        follow: false
    },
    alternates: {
        canonical: 'https://augeinvest.com.br/register'
    }
};
export default function RegisterPage() {
    return <Register />;
}