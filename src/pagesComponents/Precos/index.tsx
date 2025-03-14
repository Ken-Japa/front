"use client";

import { Stack, Button } from "@mui/material";
import { SectionPricing } from "./styled";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import Link from "next/link";
import { OptimizedImage } from "@/components/OptimizedImage";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';

export const Pricing = () => {
    return (
        <PageTransition>
            <ErrorBoundary>
                <SectionPricing>
                    <div className="background-image">
                        <OptimizedImage
                            src="/assets/images/background/Precos.jpg"
                            alt="Pricing Background"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="opacity">
                        <div className="opacity min-h-screen">
                            {/* Vantagens Section */}
                            <section className="py-16 px-4">
                                <Stack alignItems="center" spacing={6} maxWidth="1200px" margin="0 auto">
                                    <MatrixRainText
                                        text="Por que escolher a Auge Invest?"
                                        className="text-white text-4xl font-bold mb-8"
                                    />
                                    <div className="grid md:grid-cols-3 gap-8 w-full">
                                        <div className="text-white text-center p-6 bg-black/50 rounded-lg">
                                            <h3 className="text-xl mb-4 text-[#0D95F9]">Análise Avançada</h3>
                                            <p>Ferramentas profissionais para análise de mercado e tomada de decisão</p>
                                        </div>
                                        <div className="text-white text-center p-6 bg-black/50 rounded-lg">
                                            <h3 className="text-xl mb-4 text-[#0D95F9]">Dados em Tempo Real</h3>
                                            <p>Acompanhe suas posições e o mercado com atualizações constantes</p>
                                        </div>
                                        <div className="text-white text-center p-6 bg-black/50 rounded-lg">
                                            <h3 className="text-xl mb-4 text-[#0D95F9]">Suporte Dedicado</h3>
                                            <p>Equipe especializada para ajudar em suas dúvidas</p>
                                        </div>
                                    </div>
                                </Stack>
                            </section>

                            {/* Recursos Section */}
                            <section className="py-16 px-4 bg-black/30">
                                <Stack alignItems="center" spacing={4} maxWidth="1200px" margin="0 auto">
                                    <MatrixRainText
                                        text="Recursos Principais"
                                        className="text-3xl text-white mb-8" />
                                    <div className="grid md:grid-cols-2 gap-8 w-full mb-8">
                                        <ul className="text-white space-y-4">
                                            <li className="flex items-center">
                                                <span className="text-[#0D95F9] mr-2">›</span>
                                                Análise técnica avançada
                                            </li>
                                            <li className="flex items-center">
                                                <span className="text-[#0D95F9] mr-2">›</span>
                                                Rastreamento de carteira
                                            </li>
                                            <li className="flex items-center">
                                                <span className="text-[#0D95F9] mr-2">›</span>
                                                Alertas personalizados
                                            </li>
                                        </ul>
                                        <ul className="text-white space-y-4">
                                            <li className="flex items-center">
                                                <span className="text-[#0D95F9] mr-2">›</span>
                                                Relatórios detalhados
                                            </li>
                                            <li className="flex items-center">
                                                <span className="text-[#0D95F9] mr-2">›</span>
                                                Integração com corretoras
                                            </li>
                                            <li className="flex items-center">
                                                <span className="text-[#0D95F9] mr-2">›</span>
                                                Análise fundamentalista
                                            </li>
                                        </ul>
                                    </div>
                                    <Link href="/recursos" className="text-[#0D95F9] hover:underline">
                                        Conheça todos os recursos →
                                    </Link>
                                </Stack>
                            </section>

                            {/* Planos Section */}
                            <section className="py-16 px-4">
                                <Stack alignItems="center" spacing={6} maxWidth="1200px" margin="0 auto">
                                    <h2 className="text-3xl text-white mb-8">Escolha seu Plano</h2>
                                    <div className="grid md:grid-cols-3 gap-8 w-full">
                                        <div className="text-white p-8 bg-black/50 rounded-lg border border-[#0D95F9]">
                                            <h3 className="text-2xl mb-4">Mensal</h3>
                                            <p className="text-4xl font-bold mb-2">R$30</p>
                                            <p className="opacity-75 mb-6">/mês</p>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                fullWidth
                                            >
                                                Assinar Agora
                                            </Button>
                                        </div>
                                        <div className="text-white p-8 bg-black/50 rounded-lg border border-[#0D95F9]">
                                            <h3 className="text-2xl mb-4">Trimestral</h3>
                                            <p className="text-4xl font-bold mb-2">R$80</p>
                                            <p className="opacity-75 mb-2">/trimestre</p>
                                            <p className="text-[#00E676] mb-6">12% de desconto</p>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                fullWidth
                                            >
                                                Economizar Agora
                                            </Button>
                                        </div>
                                        <div className="text-white p-8 bg-black/50 rounded-lg border border-[#0D95F9]">
                                            <h3 className="text-2xl mb-4">Anual</h3>
                                            <p className="text-4xl font-bold mb-2">R$280</p>
                                            <p className="opacity-75 mb-2">/ano</p>
                                            <p className="text-[#00E676] mb-6">23% de desconto</p>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                fullWidth
                                            >
                                                Maior Economia
                                            </Button>
                                        </div>
                                    </div>
                                </Stack>
                            </section>

                            {/* Embaixador Section */}
                            <section className="py-16 px-4 bg-black/30">
                                <Stack alignItems="center" spacing={6} maxWidth="900px" margin="0 auto">
                                    <h2 className="text-3xl text-white mb-4">Seja um Embaixador</h2>
                                    <p className="text-white text-center mb-8 max-w-2xl">
                                        Torne-se um embaixador da Auge Invest e faça parte do nosso crescimento.
                                        Como embaixador, você terá acesso vitalício à plataforma após atingirmos 5.000 usuários,
                                        além de benefícios exclusivos.
                                    </p>
                                    <div className="text-white p-8 bg-black/50 rounded-lg border border-[#0D95F9] w-full max-w-md">
                                        <h3 className="text-2xl mb-4 text-center">Plano Embaixador</h3>
                                        <p className="text-4xl font-bold mb-2 text-center">R$100</p>
                                        <p className="opacity-75 mb-6 text-center">/mês</p>
                                        <ul className="space-y-4 mb-8 mt-2">
                                            <li className="flex items-center">
                                                <span className="text-[#0D95F9] mr-2">›</span>
                                                Acesso vitalício (após 5k usuários)
                                            </li>
                                            <li className="flex items-center">
                                                <span className="text-[#0D95F9] mr-2">›</span>
                                                Seu nome no Hall da Fama
                                            </li>

                                            <li className="flex items-center">
                                                <span className="text-[#0D95F9] mr-2">›</span>
                                                Pedidos para inovações
                                            </li>
                                            <li className="flex items-center">
                                                <span className="text-[#0D95F9] mr-2">›</span>
                                                Benefícios exclusivos
                                            </li>
                                            <li className="flex items-center">
                                                <span className="text-[#0D95F9] mr-2">›</span>
                                                Limitado
                                            </li>
                                        </ul>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            fullWidth
                                        >
                                            Tornar-se Embaixador
                                        </Button>
                                    </div>
                                </Stack>
                            </section>

                            <section className="py-16 px-4">
                                <Stack alignItems="center" spacing={4} maxWidth="1200px" margin="0 auto">
                                    <h2 className="text-3xl text-white mb-8">O que dizem nossos usuários</h2>
                                    <div className="grid md:grid-cols-3 gap-8">
                                        <div className="bg-black/50 p-6 rounded-lg border border-[#0D95F9]/30">
                                            <p className="text-white mb-4">&quot;A melhor plataforma para análise de investimentos que já utilizei. Interface intuitiva e recursos poderosos.&quot;</p>
                                            <p className="text-[#0D95F9]">João Silva</p>
                                            <p className="text-white/70 text-sm">Investidor Independente</p>
                                        </div>
                                        <div className="bg-black/50 p-6 rounded-lg border border-[#0D95F9]/30">
                                            <p className="text-white mb-4">&quot;Os alertas personalizados me ajudam a não perder oportunidades importantes no mercado.&quot;</p>
                                            <p className="text-[#0D95F9]">Maria Santos</p>
                                            <p className="text-white/70 text-sm">Day Trader</p>
                                        </div>
                                        <div className="bg-black/50 p-6 rounded-lg border border-[#0D95F9]/30">
                                            <p className="text-white mb-4">&quot;O suporte é excepcional e as análises são precisas. Vale cada centavo investido.&quot;</p>
                                            <p className="text-[#0D95F9]">Pedro Costa</p>
                                            <p className="text-white/70 text-sm">Analista Financeiro</p>
                                        </div>
                                    </div>
                                </Stack>
                            </section>
                            {/* Financiamento Coletivo Section */}
                            <section className="py-16 px-4">
                                <Stack alignItems="center" spacing={4} maxWidth="800px" margin="0 auto">
                                    <h2 className="text-3xl text-white mb-4">Apoie Nosso Desenvolvimento</h2>
                                    <p className="text-white text-center mb-8">
                                        Contribua com nosso financiamento coletivo e ajude-nos a desenvolver
                                        ainda mais funcionalidades para a plataforma.
                                    </p>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        size="large"
                                    >
                                        Participar da Campanha
                                    </Button>
                                </Stack>
                            </section>
                        </div>

                        <section className="py-16 px-4 bg-black/30">
                            <Stack alignItems="center" spacing={4} maxWidth="800px" margin="0 auto">
                                <h2 className="text-3xl text-white mb-8">Dúvidas Frequentes sobre Planos</h2>
                                <div className="w-full space-y-4">
                                    <div className="bg-black/50 p-6 rounded-lg border border-[#0D95F9]/30">
                                        <h3 className="text-[#0D95F9] mb-2">Posso mudar de plano depois?</h3>
                                        <p className="text-white">Sim, você pode alterar seu plano a qualquer momento.</p>
                                    </div>
                                    <div className="bg-black/50 p-6 rounded-lg border border-[#0D95F9]/30">
                                        <h3 className="text-[#0D95F9] mb-2">Como funciona o período de teste?</h3>
                                        <p className="text-white">Oferecemos 21 dias de teste gratuito em qualquer plano.</p>
                                    </div>
                                    <div className="bg-black/50 p-6 rounded-lg border border-[#0D95F9]/30">
                                        <h3 className="text-[#0D95F9] mb-2">Qual a forma de pagamento?</h3>
                                        <p className="text-white">Aceitamos cartões de crédito, débito e PIX.</p>
                                    </div>
                                </div>
                                <Link href="/faq" className="text-[#0D95F9] hover:underline">
                                    Ver todas as dúvidas →
                                </Link>
                            </Stack>
                        </section>
                    </div>
                </SectionPricing>
            </ErrorBoundary>
        </PageTransition>
    );
};