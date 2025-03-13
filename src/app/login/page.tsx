import { Login } from "@/pagesComponents/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Login | Auge Invest',
    description: 'Acesse sua conta na Auge Invest. Entre para gerenciar seus investimentos e acompanhar suas análises financeiras em tempo real.',
    openGraph: {
        title: 'Login | Auge Invest',
        description: 'Acesse sua conta na plataforma líder em análise de investimentos',
        images: [
            {
                url: '/assets/images/background/REGISTER.jpg',
                width: 1368,
                height: 768,
                alt: 'Login Auge Invest'
            }
        ],
    },
    robots: {
        index: false,
        follow: false
    },
    alternates: {
        canonical: 'https://augeinvest.com.br/login'
    }
};

export default function LoginPage() {
    return <Login />;
}