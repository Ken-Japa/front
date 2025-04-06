'use client';

import React from 'react';
import { ThemeProvider } from '@/theme/ThemeContext';
import { DateProvider } from './DateProvider';
import { AuthProvider } from './AuthProvider';
import { ApiProvider } from './ApiProvider';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary fallbackComponent={<div>Something went wrong</div>}>
      <AuthProvider>
        <ApiProvider>
          <AppRouterCacheProvider>
            <ThemeProvider>
              <DateProvider>
                {children}
              </DateProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </ApiProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}