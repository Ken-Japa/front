import { Alertas } from "@/pagesComponents/Logado/Alertas";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Alertas | AugeInvest",
    description: "Alertas",
};

export default function AlertasPage() {
    return <Alertas />;
}