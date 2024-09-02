import { LoginForm } from '@/components/auth/LoginForm'

import { LoginQuote } from '@/components/auth/LoginQuote'
import { RedirectIfLoggedIn } from '@/components/redirect/RedirectIfLoggedIn'
import React from 'react'

const SignUppage = () => {
  return (
    <>
    <RedirectIfLoggedIn />
    <div className='flex-row grid grid-cols-1 md:grid-cols-2 items-center bg-slate-100 dark:bg-slate-900 gap-10 min-h-screen'>
        <div className='text-center md:ml-20'>
            <LoginQuote />
        </div>
        <div className="my-10">
            <LoginForm />
        </div>
    </div>
    </>
  )
}

export default SignUppage