'use client'
import { signOut } from "next-auth/react";

export default function home() {
    return (
        <div>Home
            <button className="text-2xl p-2 m-2 bg-slate-500" onClick={() => signOut()}>logout</button>
        </div>
    )
}