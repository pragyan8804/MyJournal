import { PrismaClient } from "@prisma/client";
import NextAuth, { NextAuthOptions, Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const prismaClient = new PrismaClient();

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user }: { user: User }) {
      if (!user.email) return false;

      try {
        const existingUser = await prismaClient.user.findUnique({
          where: { email: user.email },
        });

        if (!existingUser) {
          await prismaClient.user.create({
            data: {
              name: user.name ?? "Anonymous",
              email: user.email,
              image: user.image ?? "",
              provider: "Google",
            },
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async session({ session, token }: { session: Session; token: any }) {
      if (session.user) {
        const existingUser = await prismaClient.user.findUnique({
          where: { email: session.user.email ?? "" },
        });
        if (existingUser) {
          session.user.name = existingUser.name;
          session.user.image = existingUser.image;
        }
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
