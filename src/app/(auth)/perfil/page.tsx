import { Perfil } from "@/pagesComponents/Logado/Perfil";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Perfil usuário | AugeInvest",
    description: "Perfil do usuário conta Auge Invest",
};

export default function PerfilPage() {
    return <Perfil />;
}