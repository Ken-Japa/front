"use client";

import { Stack, Typography, Container, Box } from "@mui/material";
import { SectionTermsServices } from "./styled";
import { Link } from "@mui/material";
import GavelIcon from '@mui/icons-material/Gavel';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useState, useEffect } from 'react';
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import { OptimizedImage } from "@/components/OptimizedImage";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';

export const TermsServices = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
        { id: "info", title: "1. INFORMAÇÕES GERAIS" },
        { id: "uso", title: "2. USO DO SERVIÇO" },
        { id: "periodo", title: "3. PERÍODO DE UTILIZAÇÃO GRATUITA" },
        { id: "assinatura", title: "4. ASSINATURA" },
        { id: "precos", title: "5. PREÇOS E PAGAMENTO" },
        { id: "limitacao", title: "6. LIMITAÇÃO DE USO" },
        { id: "cancelamento", title: "7. CANCELAMENTO" },
        { id: "seguranca", title: "8. SEGURANÇA" },
        { id: "alteracoes", title: "9. ALTERAÇÕES" },
        { id: "contato", title: "10. CONTATO" }
    ];

    return (
        <PageTransition>
            <ErrorBoundary>
                <SectionTermsServices>
                    <div className="background-image">
                        <OptimizedImage
                            src="/assets/images/background/BACKGROUND-DEFAULT.jpg"
                            alt="Terms of Service Background"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="opacity">
                        <Container maxWidth="lg" className="py-16">
                            {isLoading ? (
                                <Stack spacing={4}>
                                    {/* Header Skeleton */}
                                    <Stack alignItems="center" spacing={2}>
                                        <ContentSkeleton />
                                        <ContentSkeleton />
                                        <ContentSkeleton />
                                    </Stack>

                                    {/* Navigation Skeleton */}
                                    <ContentSkeleton type="card" />

                                    {/* Content Sections Skeleton */}
                                    {Array(10).fill(0).map((_, index) => (
                                        <ContentSkeleton
                                            key={`section-${index}`}
                                            type="card"
                                        />
                                    ))}
                                </Stack>
                            ) : (
                                <>
                                    {/* Header */}
                                    <Box className="text-center mb-12">
                                        <div className="flex items-center justify-center gap-3 mb-6">
                                            <GavelIcon sx={{ fontSize: 40, color: '#0D95F9' }} />
                                            <MatrixRainText
                                                text="Termos de Serviço"
                                                className="text-4xl font-bold text-[#0D95F9]"
                                            />
                                        </div>
                                        <Typography variant="h5" className="text-white/80 mb-2">
                                            Auge Invest
                                        </Typography>
                                        <div className="flex justify-center mt-4">
                                            <Typography variant="body1" className="text-white/80 max-w-2xl text-center">
                                                Por favor, leia atentamente nossos termos de serviço
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
                                                    onClick={() => scrollToSection(section.id)}
                                                    className="text-white/85 hover:text-[#0D95F9] transition-colors cursor-pointer"
                                                >
                                                    {section.title}
                                                </a>
                                            ))}
                                        </div>
                                    </Box>

                                    {/* Main Content */}
                                    <Stack direction="column" maxWidth="1024px" width="100%" marginX="auto" className="text-white/90">
                                        <p className="mb-5">Auge Invest Tecnologia Ltda., uma empresa brasileira inscrita no Cadastro Nacional de Pessoas Jurídicas sob o número <span className="text-warningMain">[seu CNPJ]</span>, com sede à <span className="text-warningMain">[seu endereço]</span>, fornece a você o serviço &quot;Auge Invest&quot;.</p>

                                        <div id="info" className="mb-5 bg-[#ffffff05] p-6 rounded-lg">
                                            <h2 className="text-2xl text-infoMain mb-5">1. INFORMAÇÕES GERAIS</h2>
                                            <p className="mb-5">A Auge Capital é uma plataforma financeira destinada a auxiliar investidores no mercado financeiro brasileiro, oferecendo análises detalhadas, dados históricos, gráficos e outras ferramentas financeiras. A plataforma é de uso pessoal e não comercial, com o objetivo de fornecer informações para tomadas de decisão no mercado de investimentos</p>
                                            <p className="mb-5">Somos uma plataforma de análise - não somos corretora, consultoria ou gestora. Seu capital nunca é movimentado por nós.</p>
                                            <p className="mb-5">Ao utilizar o Auge Capital, você deve estar ciente e concordar com nossos Termos de Serviço. Ao se cadastrar e optar por assinar nossos serviços, consideraremos que você compreendeu e aceitou os presentes Termos de Serviço.</p>
                                            <p>Conforme a legislação vigente, você só poderá aceitar estes Termos de Serviço e utilizar o Auge Capital se for maior de 18 anos e legalmente capaz, conforme os artigos 1º, 3º e 4º do Código Civil Brasileiro de 2002.</p>
                                        </div>

                                        <div id="uso" className="mb-5 bg-[#ffffff05] p-6 rounded-lg">
                                            <h2 className="text-2xl text-infoMain mb-5">2. USO DO SERVIÇO, PROPRIEDADE INTELECTUAL E CONTEÚDO DOS SERVIÇOS</h2>
                                            <p className="mb-5">Para prestar os serviços oferecidos e aprimorar sua experiência na plataforma, será necessário fornecer alguns dados pessoais, que devem ser sempre exatos, corretos, atualizados e verdadeiros. Esses dados serão tratados conforme nossa <Link href="/politica-privacidade" color="info">Política de Privacidade.</Link></p>
                                            <p className="mb-5">O conteúdo da plataforma Auge Capital é destinado exclusivamente para uso pessoal. Os direitos de propriedade intelectual pertencem exclusivamente à Auge Capital Tecnologia Ltda. É vedada a comercialização, reprodução, modificação, publicação ou distribuição das informações oferecidas sem autorização expressa.</p>
                                            <p>A Auge Capital não presta serviços de consultoria de investimentos nem recomendações específicas sobre rentabilidade, liquidez ou risco. As informações fornecidas têm caráter informativo e não se traduzem em recomendações financeiras, legais ou fiscais.</p>
                                        </div>

                                        <div id="periodo" className="mb-5 bg-[#ffffff05] p-6 rounded-lg">
                                            <h2 className="text-2xl text-infoMain mb-5">3. PERÍODO DE UTILIZAÇÃO GRATUITA</h2>
                                            <p>Sua assinatura poderá começar com um período de utilização gratuita de vinte e um dias, destinado a novos e potenciais clientes. A liberação da utilização gratuita é determinada pela Auge Capital a seu exclusivo critério e pode ser revogada a qualquer momento.</p>
                                        </div>

                                        <div id="assinatura" className="mb-5 bg-[#ffffff05] p-6 rounded-lg">
                                            <h2 className="text-2xl text-infoMain mb-5">4. ASSINATURA</h2>
                                            <p className="mb-5">A Auge Capital oferece planos de assinatura mensal, trimestral e anual. As assinaturas são renovadas automaticamente até que sejam canceladas. Você deve fornecer uma forma de pagamento válida, que pode ser atualizada. Ao assinar, você concorda que os valores relativos à sua assinatura serão cobrados na forma de pagamento indicada.</p>
                                        </div>

                                        <div id="precos" className="mb-5 bg-[#ffffff05] p-6 rounded-lg">
                                            <h2 className="text-2xl text-infoMain mb-5">5. PREÇOS, FORMAS DE PAGAMENTO E COBRANÇA</h2>
                                            <p className="mb-5">Os preços e formas de pagamento para os planos de assinatura são detalhados na plataforma. Alterações nos preços ou nos planos serão notificadas com antecedência mínima de 30 dias.</p>
                                        </div>

                                        <div id="limitacao" className="mb-5 bg-[#ffffff05] p-6 rounded-lg">
                                            <h2 className="text-2xl text-infoMain mb-5">6. LIMITAÇÃO DE USO</h2>
                                            <p className="mb-5">É vedado ao assinante:</p>
                                            <ul>
                                                <li>• Copiar, ceder, sublicenciar, vender ou reproduzir o software da plataforma.</li>
                                                <li>• Promover engenharia reversa ou desenvolver novo software com base na plataforma.</li>
                                                <li>• Utilizar o software para práticas nocivas como exploits, spamming ou spoofing.</li>
                                                <li>• Utilizar o software para fins diversos daqueles para os quais foi disponibilizado.</li>
                                            </ul>

                                        </div>

                                        <div id="cancelamento" className="mb-5 bg-[#ffffff05] p-6 rounded-lg">
                                            <h2 className="text-2xl text-infoMain mb-5">7. CANCELAMENTO</h2>
                                            <p className="mb-5">Você pode cancelar sua assinatura a qualquer momento. Para assinaturas mensais, o acesso ao serviço continuará até o fim do período de faturamento. Para assinaturas trimestrais e anuais, o reembolso será proporcional ao período utilizado com a aplicação de uma multa de 15% sobre o total contratado.</p>
                                        </div>

                                        <div id="segurancao" className="mb-5 bg-[#ffffff05] p-6 rounded-lg">
                                            <h2 className="text-2xl text-infoMain mb-5">8. SEGURANÇA DA CONTA E SENHAS DO USUÁRIO</h2>
                                            <p className="mb-5">A Auge Capital compromete-se a assegurar que as informações pessoais dos usuários sejam armazenadas de forma segura, garantindo proteção, privacidade e confidencialidade. A segurança das suas informações pessoais também depende da segurança do seu dispositivo e rede.</p>
                                        </div>

                                        <div id="alteracoes" className="mb-5 bg-[#ffffff05] p-6 rounded-lg">
                                            <h2 className="text-2xl text-infoMain mb-5">9. ALTERAÇÕES DOS TERMOS DE SERVIÇO</h2>
                                            <p className="mb-5">A Auge Capital poderá revisar e atualizar estes Termos de Serviço periodicamente. É sua responsabilidade manter-se informado sobre as condições aqui estabelecidas.</p>
                                        </div>

                                        <div id="contato" className="mb-5 bg-[#ffffff05] p-6 rounded-lg">
                                            <h2 className="text-2xl text-infoMain mb-5">10. CONTATO</h2>
                                            <p className="mb-5">Para dúvidas ou informações adicionais, entre em contato conosco pelo e-mail <Link color="info">capitalauge@gmail.com</Link>.</p>
                                        </div>

                                    </Stack>
                                </>
                            )}

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
                        </Container>
                    </div>
                </SectionTermsServices>
            </ErrorBoundary>
        </PageTransition>
    );
}