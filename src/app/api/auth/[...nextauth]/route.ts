import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

// Create a server-side function to handle Google login
async function handleGoogleLogin(token: string) {
  try {
    const response = await fetch("https://api-servidor-yupg.onrender.com/login/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
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
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        
        try {
          // Call your API for login
          const response = await fetch("https://api-servidor-yupg.onrender.com/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password
            }),
          });
          
          if (!response.ok) {
            return null;
          }
          
          const data = await response.json();
          
          if (data && data.user) {
            // Store the token in a secure HTTP-only cookie instead of localStorage
            cookies().set("authToken", data.token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === "production",
              maxAge: 30 * 24 * 60 * 60, // 30 days
              path: "/",
            });
            
            return {
              id: data.user._id || '',
              email: data.user.email || '',
              name: data.user.name || '',
              image: data.user.picture || ''
            };
          }
          
          return null;
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/login',
    error: '/auth/error',
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async signIn({ user, account }) {
      // Handle Google sign-in
      if (account?.provider === 'google' && account?.id_token) {
        try {
          // Send the Google token to our backend
          const apiResponse = await handleGoogleLogin(account.id_token);
          
          if (apiResponse && apiResponse.token) {
            // Store the token in a secure HTTP-only cookie
            cookies().set("authToken", apiResponse.token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === "production",
              maxAge: 30 * 24 * 60 * 60, // 30 days
              path: "/",
            });
            
            // Update user with data from our API if needed
            if (apiResponse.user) {
              user.id = apiResponse.user._id || user.id;
              user.name = apiResponse.user.name || user.name;
              user.email = apiResponse.user.email || user.email;
              user.image = apiResponse.user.picture || user.image;
            }
          }
          
          return true;
        } catch (error) {
          console.error("Google authentication error:", error);
          return false;
        }
      }
      
      return true;
    },
    async session({ session, token }) {
      if (token.sub) {
        session.user.id = token.sub;
      }
      
      // Add the user ID to the session
      if (token.userId) {
        session.user.id = token.userId as string;
      }
      
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
      }
      return token;
    }
  }
});

export { handler as GET, handler as POST };