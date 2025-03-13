import { Solutions } from "@/pagesComponents/Recursos";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Recursos | Auge Invest',
    description: 'Funcionalidades da Auge Invest',
};
export default function SolutionsPage() {
    return <Solutions />;
}