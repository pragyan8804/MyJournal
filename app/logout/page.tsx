"use client"

import { RedirectIfLoggedOut } from "@/components/redirect/RedirectIfLoggedOut";
import { signOut } from "next-auth/react";

export default function logout() {
    return (
        <div>
            <RedirectIfLoggedOut />
            are you sure you want to log out
            <button className="text-2xl p-2 m-2 bg-slate-500" onClick={() => signOut()}>logout</button>
        </div>
    )
}