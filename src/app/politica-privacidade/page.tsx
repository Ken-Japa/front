import { PrivacyPolicy } from "@/pagesComponents/PoliticaPrivacidade";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Politica de Privacidade | Auge Invest',
  description: 'Politica de privacidade da Auge Invest',
};
const Page = () => {
  return (<PrivacyPolicy />);
}

export default Page;