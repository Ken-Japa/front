"use client";

import { Stack, Typography, Container, Divider, Box } from "@mui/material";
import { Link } from "@mui/material";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import SecurityIcon from '@mui/icons-material/Security';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useState, useEffect } from 'react';
import { SectionPolicy } from "./styled";
import { OptimizedImage } from "@/components/OptimizedImage";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";

export const PrivacyPolicy = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Update the scroll function
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
    };

    const sections = [
        { id: "dados", title: "I - DADOS PESSOAIS" },
        { id: "finalidade", title: "II – FINALIDADE" },
        { id: "compartilhamento", title: "III – COMPARTILHAMENTO" },
        { id: "transferencia", title: "IV – TRANSFERÊNCIA INTERNACIONAL" },
        { id: "consentimento", title: "V – CONSENTIMENTO E REVOGAÇÃO" },
        { id: "armazenamento", title: "VI – ARMAZENAMENTO" },
        { id: "retencao", title: "VII – RETENÇÃO" },
        { id: "direitos", title: "VIII – DIREITOS DOS TITULARES" }
    ];

    return (
        <SectionPolicy>
            <div className="background-image">
                <OptimizedImage
                    src="/assets/images/background/BACKGROUND-DEFAULT.jpg"
                    alt="Privacy Policy Background"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="opacity">
                <div className="section-privacy">
                    <Container maxWidth="lg" className="py-16">
                        {isLoading ? (
                            <Stack spacing={3} width="100%">
                                <ContentSkeleton />
                                <ContentSkeleton type="text" />
                                <Stack spacing={2}>
                                    {Array(8).fill(0).map((_, index) => (
                                        <ContentSkeleton key={index} type="card" />
                                    ))}
                                </Stack>
                            </Stack>
                        ) : (
                            <>
                                {/* Header */}
                                <Box className="text-center mb-12">
                                    <div className="flex items-center justify-center gap-3 mb-6">
                                        <SecurityIcon sx={{ fontSize: 40, color: '#0D95F9' }} />
                                        <MatrixRainText
                                            text="Política de Privacidade"
                                            className="text-4xl font-bold text-[#0D95F9]"
                                        />
                                    </div>
                                    <Typography variant="h5" className="text-white/80 mb-2">
                                        Auge Invest
                                    </Typography>
                                    <div className="flex justify-center mt-4">
                                        <Typography variant="body1" className="text-white/60 max-w-2xl text-center">
                                            Comprometidos com a transparência e segurança dos seus dados
                                        </Typography>
                                    </div>
                                </Box>

                                {/* Quick Navigation */}
                                <Typography variant="h6" className="text-[#0D95F9] mb-4 text-center">
                                    Navegação Rápida
                                </Typography>
                                <Box className="bg-[#ffffff0a] p-6 rounded-lg mb-12 backdrop-blur-sm">

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {sections.map((section) => (
                                            <a
                                                key={section.id}
                                                href={`#${section.id}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    scrollToSection(section.id);
                                                }}
                                                className="text-white/70 hover:text-[#0D95F9] transition-colors cursor-pointer"
                                            >
                                                {section.title}
                                            </a>
                                        ))}
                                    </div>
                                </Box>

                                {/* Main Content */}
                                <Stack
                                    direction="column"
                                    spacing={6}
                                    className="text-white/80"
                                >
                                    <div id="dados">
                                        <h2 id="dados-title" className="text-2xl text-infoMain mb-5">
                                            I - DADOS PESSOAIS
                                        </h2>
                                        <p>
                                            A fim de viabilizar a prestação dos nossos serviços e aprimorar a sua experiência em nossa plataforma, a Auge Invest coleta os seguintes dados pessoais
                                        </p>
                                    </div>
                                    <div id="finalidade" className="mb-5">
                                        <h2 className="text-2xl text-infoMain mb-5">II – FINALIDADE</h2>
                                        <p>Os seus dados pessoais são tratados pela Auge Invest, apenas e exclusivamente, para atender a finalidades específicas, em conformidade com as previsões da Lei 13.709/18 (LGPD), conforme quadro explicativo abaixo</p>
                                    </div>
                                    <div id="compartilhamento" className="mb-5">
                                        <h2 className="text-2xl text-infoMain mb-5">III – COMPARTILHAMENTO</h2>
                                        <p className="mb-5">A Auge Invest não faz qualquer tipo de divulgação dos dados pessoais dos seus clientes e potenciais clientes. O compartilhamento das suas informações pessoais é feito apenas para cumprimento de obrigação legal/regulatória ou quando imprescindível para desempenhar os serviços oferecidos pela plataforma, sempre nos limites das finalidades estabelecidas nesta Política de Privacidade.</p>
                                        <p className="mb-5">Os seus dados pessoais poderão ser compartilhados com: (i) órgãos controladores e autoridades regulatórias ou judiciais; (ii) prestadores de serviço e consultores especializados; (iii) prestadores de serviço de pagamento (tokenização); (iv) parceiros; e (v) para fins de armazenamento – nuvem.</p>
                                        <p>Nessas situações, quando os seus dados pessoais precisam ser compartilhados, a Auge Invest se preocupa em exigir que sejam adotadas, pelo terceiro, medidas de segurança, técnicas e administrativas apropriadas para proteger as suas informações pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito.</p>
                                    </div>
                                    <div id="transferencia" className="mb-5">
                                        <h2 className="text-2xl text-infoMain mb-5">IV – TRANSFERÊNCIA INTERNACIONAL DE DADOS PESSOAIS</h2>
                                        <p>A Auge Invest realiza o tratamento dos dados pessoais dos seus clientes e potenciais clientes apenas em território nacional.</p>
                                    </div>
                                    <div id="consentimento" className="mb-5">
                                        <h2 className="text-2xl text-infoMain mb-5">V – CONSENTIMENTO E REVOGAÇÃO DO CONSENTIMENTO</h2>
                                        <p className="mb-5">A Auge Invest realizaCaso, para legitimar o tratamento de determinados dados pessoais, seja necessário o seu consentimento, este será solicitado, oportunamente, na própria área logada da plataforma, de forma livre, inequívoca e informada.</p>
                                        <p>Você pode revogar o consentimento a qualquer tempo, mediante solicitação enviada para o Encarregado de Dados da Auge Invest através do e-mail: privacidade@augeinvest.com.br o tratamento dos dados pessoais dos seus clientes e potenciais clientes apenas em território nacional.</p>
                                    </div>
                                    <div id="armazenamento" className="mb-5">
                                        <h2 className="text-2xl text-infoMain mb-5">VI – ARMAZENAMENTO</h2>
                                        <p className="mb-5">A Auge Invest tem como compromisso assegurar que as informações pessoais dos seus clientes e potenciais clientes sejam armazenadas de forma a garantir proteção, privacidade, integridade, disponibilidade e confidencialidade. Para tanto, utilizamos as melhores técnicas de segurança da informação, que buscam reduzir a vulnerabilidade de incidentes nos nossos ambientes digitais.</p>
                                        <p>Contudo, a segurança das suas informações pessoais também depende da segurança do seu computador, dispositivo ou rede, além do nível de segurança que você utiliza para proteger seus dados de autenticação (login e senha). Sendo assim, é sua responsabilidade a gestão pessoal das suas informações.</p>
                                    </div>
                                    <div id="retencao" className="mb-5">
                                        <h2 className="text-2xl text-infoMain mb-5">VII – RETENÇÃO</h2>
                                        <p>Os seus dados pessoais serão arquivados pela Auge Invest enquanto você mantiver ativa a sua conta e por até 05 (cinco) anos após a inatividade da sua conta, em razão da finalidade de cumprimento de obrigação legal ou regulatória aludida nesta Política de Privacidade.</p>
                                    </div>
                                    <div id="direitos" className="mb-5">
                                        <h2 className="text-2xl text-infoMain mb-5">VIII – DIREITOS DOS TITULARES DE DADOS</h2>
                                        <p className="mb-5">A Lei Geral de Proteção de Dados – Lei 13.709/18 destinou o seu Capítulo III para previsões acerca dos direitos dos titulares de dados, os quais estão elencados no artigo 18 da referida Lei.</p>
                                        <p className="mb-5">A Auge Invest se preocupa em assegurar que tais direitos sejam conhecidos e exercidos pelos seus clientes ou potenciais clientes. Para tanto, possuímos um Encarregado de Dados responsável pela comunicação entre a Auge Invest e você.</p>
                                        <p>Caso queira entrar em contato com a Auge Invest para abordar assuntos relacionados aos seus dados pessoais, basta enviar um e-mail para: <Link color="info">privacidade@capitalauge.com.br</Link></p>
                                    </div>
                                </Stack>

                                {/* Scroll to Top Button */}
                                {showScrollTop && (
                                    <button
                                        onClick={scrollToTop}
                                        className="fixed bottom-8 right-8 bg-[#0D95F9] p-3 rounded-full shadow-lg hover:bg-[#0D95F9]/80 transition-all duration-300"
                                        aria-label="Voltar ao topo"
                                    >
                                        <ArrowUpwardIcon />
                                    </button>

                                )}
                            </>
                        )}
                    </Container>
                </div>
            </div>
        </SectionPolicy>
    );
};