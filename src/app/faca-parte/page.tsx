import { JoinTeam } from "@/pagesComponents/Faca-parte";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Junte-se a nós | Auge Invest',
    description: 'Faça parte do time da Auge Invest',
};
export default function JoinTeamPage() {
    return <JoinTeam />;
}