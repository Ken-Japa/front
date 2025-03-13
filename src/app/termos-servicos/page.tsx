import { TermsServices } from "@/pagesComponents/TermosServicos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Termos de Serviço | Auge Invest',
  description: 'Termos de serviço da Auge Invest',
};
const Page = () => {
  return (<TermsServices />);
}

export default Page;