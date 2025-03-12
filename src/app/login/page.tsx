import { Login } from "@/pagesComponents/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Login | Auge Invest',
    description: 'Faça login na Auge Invest.',
};

export default function LoginPage() {
    return <Login />;
}