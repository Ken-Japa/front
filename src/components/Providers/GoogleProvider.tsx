"use client";

import { GoogleOAuthProvider } from '@react-oauth/google';

export function GoogleProvider({ children }: { children: React.ReactNode }) {
  return (
    <GoogleOAuthProvider clientId="1003907984595-69s0sl5mntme3nsogi6ririis2rj0omv.apps.googleusercontent.com">
      {children}
    </GoogleOAuthProvider>
  );
}