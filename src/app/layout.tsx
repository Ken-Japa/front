import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import theme from "@/theme/mui";
import { Layout } from "@/components/Layout";
import { GoogleProvider } from "@/components/Providers/GoogleProvider";
import { AnimatePresence } from "framer-motion";
import { ErrorBoundary } from '@/components/ErrorBoundary';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auge Invest",
  description: "Plataforma líder em análise de investimentos. Oferecemos ferramentas avançadas e insights precisos para otimizar sua carteira de investimentos.",
  keywords: "investimentos, análise financeira, mercado financeiro, bolsa de valores, auge invest",
  authors: [{ name: "Auge Invest" }],
  openGraph: {
    title: 'Auge Invest',
    description: 'Plataforma líder em análise de investimentos',
    url: 'https://augeinvest.com.br',
    siteName: 'Auge Invest',
    images: [
      {
        url: '/assets/images/logo/Logo1.png',
        width: 722,
        height: 545,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    title: 'Auge Invest',
    description: 'Plataforma líder em análise de investimentos',
    card: 'summary_large_image',
    images: [
      {
        url: '/assets/images/logo/Logo1.png',
        width: 722,
        height: 545,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ErrorBoundary>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <GoogleProvider>
                <Layout>
                  <AnimatePresence mode="wait">
                    {children}
                  </AnimatePresence>
                </Layout>
              </GoogleProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
