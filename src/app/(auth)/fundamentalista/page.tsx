import { Metadata } from "next";
import { AnaliseFundamentalista } from "@/pagesComponents/Logado/Analise Fundamentalista";


export const metadata: Metadata = {
    title: "Análise Fundamentalista | AugeInvest",
    description: "Faça o upload do arquivo e obtenha as principais métricas da análise fundamentalista.",
    openGraph: {
        title: 'Análise Fundamentalista | AugeInvest',
        description: 'Faça o upload do arquivo e obtenha as principais métricas da análise fundamentalista.',
        type: 'website',
        siteName: 'AugeInvest',
    },
    keywords: 'auge invest',
    robots: 'index, follow',
};

export default function AnaliseFundamentalistaPage() {
    return <AnaliseFundamentalista />;
}