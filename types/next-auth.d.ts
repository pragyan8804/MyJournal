import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      isPremium: boolean;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    isPremium: boolean;
  }
}
