import { Contact } from "@/pagesComponents/Contato";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contato | Auge Invest',
    description: 'Entre em contato a Auge Invest',
};

export default function ContactPage() {
    return <Contact />;
}