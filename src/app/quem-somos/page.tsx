import AboutPage from "@/pagesComponents/Quem-somos";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Quem somos | Auge Invest',
    description: 'Uma descrição sobre a Auge Invest',
};

export default function RegisterPage() {
    return <AboutPage />;
}