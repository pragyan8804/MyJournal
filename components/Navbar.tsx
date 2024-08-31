"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export function Navbar() {
    const session = useSession()

    return (
        <div className='text-3xl flex flex-row justify-around'>
            <div>MyJournal</div>
            <div>
                {session.data?.user && <button className='text-2xl m-2 p-2 bg-blue-200' onClick={() => signOut()}>Log Out</button>}
                {!session.data?.user && <button className='text-2xl m-2 p-2 bg-blue-200' onClick={() => signIn()}>SignIn</button>}
                
            </div>
        </div>
  )
}