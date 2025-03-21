import { Metadata } from "next";
import { EmpresaDetalhes } from "@/pagesComponents/Logado/Empresa/components/EmpresaDetalhes";

type Props = {
    params: { slug: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return {
        title: `${params.slug.toUpperCase()} | AugeInvest`,
        description: `Análise detalhada da empresa ${params.slug.toUpperCase()}, incluindo dividendos, derivativos e métricas principais.`,
    };
}

export default function EmpresaPage({ params }: Props) {
    return <EmpresaDetalhes slug={params.slug} />;
}