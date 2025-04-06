import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

// Create a server-side function to handle Google login
async function handleGoogleLogin(token: string) {
  try {
    const response = await fetch(
      "https://api-servidor-yupg.onrender.com/login/google",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      }
    );

    if (!response.ok) {
      console.error(`API error: ${response.status}`);
      const errorData = await response.json();
      console.error("API error details:", errorData);
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in Google login:", error);
    throw error;
  }
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          const response = await fetch(
            "https://api-servidor-yupg.onrender.com/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );

          if (!response.ok) {
            return null;
          }

          const data = await response.json();

          if (data && data.success && data.data) {
            // Store token in cookies instead of localStorage
            cookies().set("authToken", data.data.token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === "production",
              maxAge: 30 * 24 * 60 * 60, // 30 days
              path: "/",
            });

            // Return user data for NextAuth session
            return {
              id: data.data._id || "",
              email: data.data.email || "",
              name: data.data.name || "",
            };
          }

          return null;
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async signIn({ user, account }) {
      // Handle Google sign-in
      if (account?.provider === "google" && account?.id_token) {
        try {
          // Send the Google token to our backend
          const apiResponse = await handleGoogleLogin(account.id_token);

          if (apiResponse && apiResponse.token) {
            // Store the token in cookies
            cookies().set("authToken", apiResponse.token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === "production",
              maxAge: 30 * 24 * 60 * 60, // 30 days
              path: "/",
            });
            
            // Also set a client-accessible version for API calls
            cookies().set("clientAuthToken", apiResponse.token, {
              httpOnly: false, // Allow client-side access
              secure: process.env.NODE_ENV === "production",
              maxAge: 30 * 24 * 60 * 60, // 30 days
              path: "/",
            });

            // Store user ID in a client-accessible cookie
            if (apiResponse.user && apiResponse.user._id) {
              cookies().set("userId", apiResponse.user._id, {
                httpOnly: false, // Allow client-side access
                secure: process.env.NODE_ENV === "production",
                maxAge: 30 * 24 * 60 * 60, // 30 days
                path: "/",
              });
              
              // Store user ID for profile fetching
              user.id = apiResponse.user._id;
            }
          }

          return true;
        } catch (error) {
          console.error("Google authentication error:", error);
          // Still allow sign in even if our API fails
          return true;
        }
      }

      return true;
    },

    async jwt({ token, user, account }) {
      // Add user ID to the token when signing in
      if (user) {
        token.userId = user.id;
      }

      // Add the auth token from Google sign-in
      if (account?.provider === "google" && account?.id_token) {
        token.googleToken = account.id_token;
      }

      return token;
    },

    async session({ session, token }) {
      // Add user ID to the session
      if (token.userId) {
        session.user.id = token.userId as string;
      }

      return session;
    },
  },
});

export { handler as GET, handler as POST };
