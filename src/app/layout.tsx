import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@/theme/ThemeContext';
import { Layout } from "@/components/Layout";
import { AnimatePresence } from "framer-motion";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { AuthProvider } from "@/providers/AuthProvider";


const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

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
  icons: {
    icon: '/favicon.ico',
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
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="https://fonts.googleapis.com"
        />

      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <AuthProvider>
            <AppRouterCacheProvider>
              <ThemeProvider>
                <Layout>
                  <AnimatePresence mode="wait">
                    {children}
                  </AnimatePresence>
                </Layout>
              </ThemeProvider>
            </AppRouterCacheProvider>
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
