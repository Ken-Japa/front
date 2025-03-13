import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import theme from "@/theme/mui";
import { Layout } from "@/components/Layout";
import { GoogleProvider } from "@/components/Providers/GoogleProvider";
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auge Invest",
  description: "Plataforma de análise de investimentos",
  icons: {
    icon: [
      {
        url: '/assets/images/logo/Icon.png',
        type: 'image/png',
      }
    ],
    shortcut: '/assets/images/logo/Icon.png',
    apple: '/assets/images/logo/Icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
      </body>
    </html>
  );
}
