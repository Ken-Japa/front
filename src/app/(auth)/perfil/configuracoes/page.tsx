import { Configuracoes } from "@/pagesComponents/Logado/Configuracoes";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Configuracoes | AugeInvest",
    description: "Configuracoes do usuário conta Auge Invest",
};

export default function ConfiguracoesPage() {
    return <Configuracoes />;
}