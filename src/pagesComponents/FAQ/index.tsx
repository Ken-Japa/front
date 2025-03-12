"use client";

import { Stack } from "@mui/material";
import { DarkAccordion } from "@/components/Custom/DarkAccordion";
import { SectionFAQ } from "./styled";

const faqQuestions = [
    {
        title: "O que é a Auge Capital ?",
        body: "Auge Capital é um aplicativo financeiro desenvolvido para ajudar investidores a monitorar e analisar ativos e dividendos, proporcionando insights detalhados sobre o mercado e facilitando decisões de investimento."
    },
    {
        title: "Quais são as principais funcionalidades ?",
        body: "Nossas principais funcionalidades incluem análise de preços, histórico de derivativos, rastreamento de posições, gráficos de rede por setor, tabelas detalhadas de ativos e uma ferramenta de acompanhamento de desempenho."
    },
    {
        title: "Como posso monitorar meus investimentos no aplicativo ?",
        body: "Você pode utilizar nossa ferramenta de rastreamento de posições para monitorar tanto operações reais quanto fictícias, permitindo um acompanhamento preciso de seu portfólio."
    },
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
        body: "O plano de embaixador oferece uma página de agradecimentos, acesso vitalício após atingirmos 5.000 usuários, um canal de comunicação direto com os desenvolvedores e reconhecimento especial como patrocinador do app."
    },
    {
        title: "Como a Auge Digital utiliza meus dados pessoais?",
        body: 'Seus dados são utilizados apenas para melhorar sua experiência e são tratados com responsabilidade e não são compartilhados com terceiros. Detalhes completos estão disponíveis em nossa <a href="/privacy-policy">Política de Privacidade</a>.'
    },
    {
        title: "Como meus dados estão protegidos ?",
        body: 'Utilizamos tecnologias de ponta para garantir a segurança dos seus dados, incluindo criptografia e práticas robustas de segurança cibernética.'
    },
    {
        title: "Auge Capital é compatível com quais dispositivos?",
        body: "Nosso aplicativo é compatível com dispositivos Android e iOS. Pode ser baixado na Google Play Store ou Apple App Store. Além disso, você pode acessar o Auge Capital através do nosso website, disponível para qualquer dispositivo através do navegador."
    },
    {
        title: "O que fazer se encontrar um bug no aplicativo?",
        body: "Se você encontrar um bug, pedimos que entre em contato com nossa equipe de suporte. Nossa equipe trabalhará para resolver o problema o mais rápido possível."
    },
    {
        title: "Preciso usar a Auge Capital fora do Brasil?",
        body: "Sim, você pode usar o Auge Capital em qualquer país, mas atualmente o foco do conteúdo e dados é no mercado brasileiro."
    },
    {
        title: "Como posso me tornar um embaixador?",
        body: "Para se tornar um embaixador, inscreva-se no plano de embaixador diretamente. Caso precise de mais informações, entre em contato com nosso suporte."
    },
    {
        title: "Há algum programa de indicação?",
        body: "Sim, oferecemos um programa de indicações onde você pode ganhar recompensas ao convidar amigos para se tornarem usuários do Auge Capital."
    }
];

export const FAQ = () => {
    return (
        <SectionFAQ>
            <Stack 
                direction="column" 
                alignItems="center" 
                className="py-10 px-4"
                sx={{
                    width: '100%',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}
            >
                <div className="bg-[rgba(0,0,0,0.8)] px-8 py-4 rounded-lg mb-8">
                    <h2 className="text-3xl text-[#0D95F9]">Dúvidas Frequentes</h2>
                </div>
                <Stack width="100%">
                    {faqQuestions.map((item, index) => (
                        <DarkAccordion
                            key={index}
                            title={item.title}
                            body={item.body}
                        />
                    ))}
                </Stack>
            </Stack>
        </SectionFAQ>
    );
}