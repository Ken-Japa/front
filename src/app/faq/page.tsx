import { FAQ } from "@/pagesComponents/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'FAQ | Auge Invest',
    description: 'Perguntas frequentes',
};
export default function FAQPage() {
    return <FAQ />;
}