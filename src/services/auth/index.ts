import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Credentials from "next-auth/providers/credentials";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const { signIn, signOut, auth, handlers } = NextAuth({
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
    error: "/auth/login",
    verifyRequest: "/auth/login",
    newUser: "/home",
  },
  providers: [
    Credentials({
      id: "credentials",
      credentials: {
        email: { label: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize({ email, password }) {
        const response = await fetch(`${baseUrl}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) return null;

        const res = await response.json();
        return res?.user ?? null;
      },
    }),
    CredentialsProvider({
      id: "register",
      credentials: {
        email: { label: "Email" },
        password: { label: "Password", type: "password" },
        name: { label: "Name" },
      },
      async authorize({ email, password, name }) {
        const response = await fetch(`${baseUrl}/auth/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, name }),
        });

        if (!response.ok) return null;

        const res = await response.json();
        return res?.user ?? null;
      },
    }),
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
});
