import { Pricing } from "@/pagesComponents/Precos";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Planos | Auge Invest',
    description: 'Assine agora um plano',
};
export default function PricingPage() {
    return <Pricing />;
}