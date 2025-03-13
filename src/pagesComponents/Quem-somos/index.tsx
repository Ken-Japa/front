"use client";

import { Stack } from "@mui/material";
import Image from "next/image";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import HistoryIcon from '@mui/icons-material/Timeline';
import RocketIcon from '@mui/icons-material/Rocket';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SecurityIcon from '@mui/icons-material/Security';
import StarIcon from '@mui/icons-material/Star';
import GroupsIcon from '@mui/icons-material/Groups';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { SectionTeam } from "./styled";
import { OptimizedImage } from "@/components/OptimizedImage";

export default function AboutPage() {
  return (
    <SectionTeam>
      <div className="background-image">
        <OptimizedImage
          src="/assets/images/background/Quem-Somos.jpg"
          alt="About Us Background"
          fill
          className="object-cover"
        />
      </div>
      <div className="opacity" />
      <div className="content">
        <div className="opacity" />
        <div className="content">
          <div className="container mx-auto px-4 py-16 relative z-10">
            <Stack spacing={8} alignItems="center">
              <div className="text-center relative">
                <MatrixRainText
                  text="Quem Somos"
                  className="text-5xl font-bold text-[#0D95F9] mb-8" />

              </div>

              <section className="max-w-3xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <HistoryIcon sx={{ color: '#FF4081', fontSize: 32 }} />
                  <h2 className="text-2xl text-[#FF4081]">Nossa História</h2>
                </div>
                <div className="bg-[#ffffff0a] p-8 rounded-lg backdrop-blur-sm">
                  <p className="mb-8 text-white">
                    Fundada em 2023, a Auge Capital nasceu da necessidade de democratizar o acesso a ferramentas
                    avançadas de análise de investimentos. Nossa equipe de especialistas em tecnologia e mercado
                    financeiro se uniu com um objetivo comum: transformar dados complexos em insights acionáveis
                    para investidores.
                  </p>
                </div>
              </section>

              <section className="max-w-3xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <RocketIcon sx={{ color: '#FF4081', fontSize: 32 }} />
                  <MatrixRainText
                    text="Nossa Missão"
                    className="text-2xl text-[#FF4081]" />
                </div>
                <div className="bg-[#ffffff0a] p-8 rounded-lg backdrop-blur-sm">
                  <p className="mt-4 mb-8 text-white">
                    Capacitar investidores com ferramentas tecnológicas inovadoras para tomada de decisões mais
                    informadas no mercado financeiro, promovendo educação financeira e democratizando o acesso a
                    análises avançadas de investimentos.
                  </p>
                </div>
              </section>

              <section className="max-w-3xl w-full">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <StarIcon sx={{ color: '#FF4081', fontSize: 32 }} />
                  <h2 className="text-2xl text-center text-[#FF4081]">Nossos Valores</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center bg-[#ffffff0a] p-6 rounded-lg hover:bg-[#ffffff15] transform hover:scale-105 transition-all duration-300">
                    <LightbulbIcon sx={{ color: '#64FFDA', fontSize: 40, marginBottom: '16px' }} />
                    <h3 className="text-xl mb-2 text-[#64FFDA]">Inovação</h3>
                    <p className="text-white">Buscamos constantemente novas soluções tecnológicas para melhorar a experiência dos nossos usuários.</p>
                  </div>
                  <div className="text-center bg-[#ffffff0a] p-6 rounded-lg hover:bg-[#ffffff15] transform hover:scale-105 transition-all duration-300">
                    <SecurityIcon sx={{ color: '#64FFDA', fontSize: 40, marginBottom: '16px' }} />
                    <h3 className="text-xl mb-2 text-[#64FFDA]">Transparência</h3>
                    <p className="text-white">Mantemos uma comunicação clara e honesta com nossa comunidade de investidores.</p>
                  </div>
                  <div className="text-center bg-[#ffffff0a] p-6 rounded-lg hover:bg-[#ffffff15] transform hover:scale-105 transition-all duration-300">
                    <StarIcon sx={{ color: '#64FFDA', fontSize: 40, marginBottom: '16px' }} />
                    <h3 className="text-xl mb-2 text-[#64FFDA]">Excelência</h3>
                    <p className="text-white">Comprometidos com a qualidade e precisão em todas as nossas ferramentas e análises.</p>
                  </div>
                </div>
              </section>

              <section className="max-w-3xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <GroupsIcon sx={{ color: '#FF4081', fontSize: 32 }} />
                  <h2 className="text-2xl text-[#FF4081]">Nossa Equipe</h2>
                </div>
                <div className="bg-[#ffffff0a] p-8 rounded-lg backdrop-blur-sm">
                  <p className="mb-8 text-white">
                    Somos um time diversificado de profissionais apaixonados por tecnologia e mercado financeiro.
                    Nossa equipe combina experiência em desenvolvimento de software, análise de dados, mercado
                    financeiro e atendimento ao cliente para oferecer a melhor experiência possível.
                  </p>
                </div>
              </section>

              <section className="max-w-3xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <HandshakeIcon sx={{ color: '#FF4081', fontSize: 32 }} />
                  <h2 className="text-2xl text-[#FF4081]">Nosso Compromisso</h2>
                </div>
                <div className="bg-[#ffffff0a] p-8 rounded-lg backdrop-blur-sm">
                  <p className="mb-8 text-white">
                    Estamos comprometidos com o crescimento contínuo e a evolução de nossa plataforma.
                    Trabalhamos diariamente para trazer novas funcionalidades e melhorias, sempre ouvindo
                    o feedback de nossa comunidade.
                  </p>
                </div>
              </section>
            </Stack>
          </div>
        </div>
      </div>
    </SectionTeam>
  );
}