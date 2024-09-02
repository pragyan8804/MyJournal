import { prismaClient } from "@/lib/db";
import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"

const handler = nextAuth({
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
    async signIn(params) {
        if (!params.user.email) return false;

        try {
            // Check if the user already exists in the database
            const existingUser = await prismaClient.user.findUnique({
                where: { email: params.user.email },  // Ensure email is a string
            });

            if (!existingUser) {
                // If the user does not exist, create a new user
                await prismaClient.user.create({
                    data: {
                        name: params.user.name ?? "Anonymous",
                        email: params.user.email,
                        image: params.user.image ?? "",
                        provider: "Google"
                    }
                });
            }
            // If the user already exists, or after creating a new user, allow sign in
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}

});

export { handler as GET, handler as POST };