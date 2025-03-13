"use client";

import { Stack } from "@mui/material";
import { DarkAccordion } from "@/components/Custom/DarkAccordion";
import { SectionFAQ } from "./styled";
import { MatrixRainText } from "@/components/Effects/MatrixRainText";
import HelpIcon from '@mui/icons-material/Help';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { OptimizedImage } from "@/components/OptimizedImage";
import { ContentSkeleton } from "@/components/Skeletons/ContentSkeleton";
import { PageTransition } from "@/components/PageTransition";

type QuestionType = {
    title: string;
    body: string;
};

type CategoryType = 'todas' | keyof QuestionsType;

// Categorize FAQ questions
const faqCategories = {
    todas: "Todas",
    geral: "Geral",
    funcionalidades: "Funcionalidades",
    assinatura: "Assinatura",
    seguranca: "Segurança",
    suporte: "Suporte"
};

type QuestionsType = {
    geral: QuestionType[];
    funcionalidades: QuestionType[];
    assinatura: QuestionType[];
    seguranca: QuestionType[];
    suporte: QuestionType[];
};

const categorizedQuestions: QuestionsType = {
    geral: [
        {
            title: "O que é a Auge Invest ?",
            body: "Auge Invest é um aplicativo financeiro desenvolvido para ajudar investidores a monitorar e analisar ativos e dividendos, proporcionando insights detalhados sobre o mercado e facilitando decisões de investimento."
        },
        {
            title: "Auge Invest é compatível com quais dispositivos?",
            body: "Nosso aplicativo é compatível com dispositivos Android e iOS. Pode ser baixado na Google Play Store ou Apple App Store. Além disso, você pode acessar o Auge Capital através do nosso website, disponível para qualquer dispositivo através do navegador."
        },
        {
            title: "Posso usar a Auge Invest fora do Brasil?",
            body: "Sim, você pode usar o Auge Invest em qualquer país, mas atualmente o foco do conteúdo e dados é no mercado brasileiro."
        }
    ],
    funcionalidades: [
        {
            title: "Quais são as principais funcionalidades ?",
            body: "Nossas principais funcionalidades incluem análise de preços, histórico de derivativos, rastreamento de posições, gráficos de rede por setor, tabelas detalhadas de ativos e uma ferramenta de acompanhamento de desempenho."
        },
        {
            title: "Como posso monitorar meus investimentos no aplicativo ?",
            body: "Você pode utilizar nossa ferramenta de rastreamento de posições para monitorar tanto operações reais quanto fictícias, permitindo um acompanhamento preciso de seu portfólio."
        }
    ],
    assinatura: [
        {
            title: "Quais são os planos de assinatura disponíveis ?",
            body: "Oferecemos um plano padrão por R$ 30 por mês e um plano de embaixador por R$ 100 por mês, que inclui benefícios exclusivos. Existem também planos trimestrais e anuais com descontos."
        },
        {
            title: "Há um período de teste gratuito?",
            body: "Sim, oferecemos um período de 21 dias de teste gratuito para novos usuários explorarem todas as funcionalidades da plataforma antes de decidirem por uma assinatura."
        },
        {
            title: "Como posso pagar minha assinatura ?",
            body: "Aceitamos várias formas de pagamento, incluindo cartões de crédito e débito. As opções de pagamento podem ser selecionadas durante o processo de assinatura."
        },
        {
            title: "Posso cancelar minha assinatura a qualquer momento?",
            body: "Sim, você pode cancelar sua assinatura a qualquer momento diretamente pelo aplicativo e continuar com acesso até o final do período pago."
        },
        {
            title: "O que está incluído no plano de embaixador ?",
            body: "O plano de embaixador foi feito para as pessoas que querem ajudar no desenvolvimento da plataforma. Oferece uma página de agradecimentos, acesso vitalício após atingir 5.000 usuários, um canal de comunicação direto com os desenvolvedores e reconhecimento especial como patrocinador do app."
        },
        {
            title: "Como posso me tornar um embaixador?",
            body: "Para se tornar um embaixador, inscreva-se na página de planos diretamente. Caso precise de mais informações, entre em contato com nosso suporte."
        },
        {
            title: "Há algum programa de indicação?",
            body: "Sim, oferecemos um programa de indicações onde você pode ganhar recompensas ao convidar amigos para se tornarem usuários do Auge Capital."
        }
    ],
    seguranca: [
        {
            title: "Como a Auge Digital utiliza meus dados pessoais?",
            body: 'Seus dados são utilizados apenas para melhorar sua experiência e são tratados com responsabilidade e não são compartilhados com terceiros. Detalhes completos estão disponíveis em nossa <a href="/privacy-policy">Política de Privacidade</a>.'
        },
        {
            title: "Como meus dados estão protegidos ?",
            body: 'Utilizamos tecnologias de ponta para garantir a segurança dos seus dados, incluindo criptografia e práticas robustas de segurança cibernética.'
        }
    ],
    suporte: [
        {
            title: "O que fazer se encontrar um bug no aplicativo?",
            body: "Se você encontrar um bug, pedimos que entre em contato com nossa equipe de suporte. Nossa equipe trabalhará para resolver o problema o mais rápido possível."
        }
    ]
};

export const FAQ = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState<CategoryType>('todas');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const filteredQuestions = searchTerm
        ? Object.values(categorizedQuestions)
            .flat()
            .filter(q =>
                q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                q.body.toLowerCase().includes(searchTerm.toLowerCase())
            )
        : activeCategory === 'todas'
            ? Object.values(categorizedQuestions).flat()
            : categorizedQuestions[activeCategory];

    return (
        <PageTransition>
            <SectionFAQ>
                <div className="background-image">
                    <OptimizedImage
                        src="/assets/images/background/BACKGROUND-DEFAULT.jpg"
                        alt="FAQ Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <Stack
                    direction="column"
                    alignItems="center"
                    className="py-10 px-4"
                    sx={{
                        width: '100%',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}
                >
                    {isLoading ? (
                        <Stack spacing={3} width="100%">
                            <ContentSkeleton />
                            <ContentSkeleton type="text" />
                            <Stack spacing={2}>
                                {Array(5).fill(0).map((_, index) => (
                                    <ContentSkeleton key={index} type="card" />
                                ))}
                            </Stack>
                        </Stack>
                    ) : (

                        <>
                            <div className="text-center mb-12">
                                <div className="flex items-center justify-center gap-3 mb-4">
                                    <HelpIcon sx={{ fontSize: 40, color: '#0D95F9' }} />
                                    <MatrixRainText
                                        text="Dúvidas Frequentes"
                                        className="text-4xl font-bold text-[#0D95F9]"
                                    />
                                </div>
                                <p className="text-white/70 mt-4">
                                    Encontre respostas para as perguntas mais comuns sobre o Auge Invest
                                </p>
                            </div>

                            {/* Search Bar */}
                            <div className="w-full max-w-md mb-8 relative">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Buscar pergunta..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full px-4 py-2 pl-10 pr-10 bg-[#ffffff0a] text-white rounded-lg 
                         border border-[#ffffff20] focus:border-[#0D95F9] outline-none
                         transition-all duration-300"
                                    />
                                    <SearchIcon
                                        className="absolute left-3 top-2.5 text-white/50"
                                        sx={{ fontSize: 20 }}
                                    />
                                    {searchTerm && (
                                        <button
                                            onClick={() => setSearchTerm('')}
                                            className="absolute right-3 top-2.5 text-white/50 hover:text-white/80 transition-colors"
                                            aria-label="Limpar pesquisa"
                                        >
                                            <CloseIcon sx={{ fontSize: 20 }} />
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Category Tabs */}
                            {!searchTerm && !isLoading && (
                                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                                    {Object.entries(faqCategories).map(([key, label]) => (
                                        <button
                                            key={key}
                                            onClick={() => setActiveCategory(key as CategoryType)}
                                            className={`px-4 py-2 rounded-full transition-all duration-300
            ${activeCategory === key
                                                    ? 'bg-[#0D95F9] text-white'
                                                    : 'bg-[#ffffff0a] text-white/70 hover:bg-[#ffffff15]'
                                                }`}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* FAQ Items */}
                            <Stack width="100%" spacing={2}>
                                {filteredQuestions.map((item, index) => (
                                    <div key={index} className="transform hover:scale-[1.01] transition-all duration-300">
                                        <DarkAccordion
                                            title={item.title}
                                            body={item.body}
                                        />
                                    </div>
                                ))}
                            </Stack>

                            {/* Contact Support */}
                            <div className="mt-12 text-center bg-[#ffffff0a] p-8 rounded-lg w-full">
                                <h3 className="text-xl text-[#0D95F9] mb-4">Não encontrou o que procurava?</h3>
                                <p className="text-white/70 mb-4">
                                    Nossa equipe de suporte está pronta para ajudar você
                                </p>
                                <Link href="/contato">
                                    <button className="px-6 py-2 bg-[#0D95F9] text-white rounded-lg hover:bg-[#0D95F9]/80 transition-all duration-300">
                                        Contatar Suporte
                                    </button>
                                </Link>
                            </div>
                        </>
                    )}
                </Stack>
            </SectionFAQ>
        </PageTransition>
    );
}