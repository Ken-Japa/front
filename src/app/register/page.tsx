import { Register } from "@/pagesComponents/Register";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Registro | Auge Invest',
    description: 'Registre-se na Auge Invest e comece sua jornada no mercado financeiro.',
};

export default function RegisterPage() {
    return <Register />;
}