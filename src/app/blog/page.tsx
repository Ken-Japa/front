import Blog from "@/pagesComponents/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Auge Invest",
    description: "Artigos, análises e insights sobre o mercado financeiro. Mantenha-se atualizado com as últimas tendências e estratégias de investimento.",
    openGraph: {
        title: 'Blog | Auge Invest',
        description: 'Conteúdo exclusivo sobre mercado financeiro e investimentos',
        type: 'website',
        locale: 'pt_BR',
        url: 'https://augeinvest.com.br/blog',
        siteName: 'Auge Invest',
        images: [
            {
                url: '/assets/images/blog/blog-cover.jpg',
                width: 1200,
                height: 630,
                alt: 'Blog Auge Invest',
            }
        ],
    },
    keywords: 'blog financeiro, análise de mercado, investimentos, educação financeira, trading',
};

export default function BlogPage() {
    return <Blog />;
}