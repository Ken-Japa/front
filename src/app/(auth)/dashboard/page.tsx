import { Dashboard } from "@/pagesComponents/Logado/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Visão Geral Economia | AugeInvest",
    description: "Visão Geral",
};

export default function DashboardPage() {
    return <Dashboard />;
}