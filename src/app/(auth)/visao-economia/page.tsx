import { VisaoEconomia } from "@/pagesComponents/Logado/Visao-Economia";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Visão Geral Economia | AugeInvest",
    description: "Vsão Geral",
};

export default function VisaoEconomiaPage() {
    return <VisaoEconomia />;
}