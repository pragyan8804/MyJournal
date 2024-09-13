"use client"

import { LogoutDialog } from "@/components/redirect/LogoutDialog";

export default function logout() {
    return (
        <div className="bg-transparent">
            <LogoutDialog />
        </div>
    )
}