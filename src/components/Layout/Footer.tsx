import { Link } from "@mui/material";
import { Logo } from "../Logo";
import LinkNext from "next/link";
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
    return (
        <footer className="container mx-auto my-14 flex flex-col gap-20">
            <div className="flex justify-between">
                <Logo height={80} width={80} />
                <div className="text-center text-white">
                    <p>Inovações tecnológicas com o objetivo de fornecer ao investidor a melhor visão do mercado.</p>
                    <Link color="inherit">capitalauge@gmail.com</Link>
                </div>
            </div>
            <div className="flex justify-center gap-12">
                <div className="flex flex-col gap-8">
                    <h5 className="font-bold text-white">Links</h5>
                    <div className="flex flex-col gap-2 text-white">
                        <LinkNext href="/" className="hover:opacity-80">Início</LinkNext>
                        <LinkNext href="/quem-somos" className="hover:opacity-80">Quem somos</LinkNext>
                        <LinkNext href="/recursos" className="hover:opacity-80">Recursos</LinkNext>
                        <LinkNext href="/precos" className="hover:opacity-80">Preços</LinkNext>
                        <LinkNext href="/faq" className="hover:opacity-80">FAQ</LinkNext>
                        <LinkNext href="/contato" className="hover:opacity-80">Fale Conosco</LinkNext>
                        <LinkNext href="/faca-parte" className="hover:opacity-80">Junte-se a equipe</LinkNext>
                        <LinkNext href="/politica-privacidade" className="hover:opacity-80">Politica de Privacidade</LinkNext>
                        <LinkNext href="/termos-servicos" className="hover:opacity-80">Termos de Serviço</LinkNext>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <h5 className="font-bold text-white">Redes Sociais</h5>
                    <div className="flex gap-2 text-white">
                        <LinkNext href="" className="hover:opacity-80"><XIcon /></LinkNext>
                        <LinkNext href="" className="hover:opacity-80"><InstagramIcon /></LinkNext>
                        <LinkNext href="" className="hover:opacity-80"><YouTubeIcon /></LinkNext>
                        <LinkNext href="" className="hover:opacity-80"><LinkedInIcon /></LinkNext>
                    </div>
                </div>
            </div>
        </footer>
    );
}