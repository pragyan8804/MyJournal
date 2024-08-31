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
    callbacks: {
        async signIn(params){

            if(!params.user.email) return false;

            try{
                await prismaClient.user.create({
                    data: {
                        name: params.user.name,
                        email: params.user.email,
                        image: params.user.image,
                        provider: "Google"
                    }
                })
            }catch(e){
                console.log(e)
                return false
            }
            return true;
        }
    }
});

export { handler as GET, handler as POST };