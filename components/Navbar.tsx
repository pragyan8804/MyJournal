"use client";

import Image from 'next/image';
import Link from 'next/link';
import { signIn, useSession } from "next-auth/react"
import React from 'react';

import { ThemeToggler } from "@/components/theme/ThemeToggler"

export const Navbar = () => {

   const session = useSession()

  return (
    <nav className="sticky top-5 bg-white bg-opacity-95 dark:bg-slate-950 py-2 px-10 border border-slate-300 dark:border-slate-700 rounded-xl shadow-md transition-all duration-300 ease-in-out flex items-center justify-between max-w-2xl mx-auto z-50 text-slate-900 dark:text-slate-100">
      <div className="flex items-center space-x-">
        <Link href="/">
          <Image src="/logo.jpg" alt="Logo" width={32} height={32} />
        </Link>
        <Link href="/" className="text-lg font-semibold transition-colors duration-300 ease-in-out p-2 rounded-lg">
          MyJournal
        </Link>
      </div>

      <div className="flex space-x-8">
        <Link href="/features" className="text-md font-medium transition-colors duration-300 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-900 p-2 rounded-lg">
          Features
        </Link>
        <Link href="/pricing" className="text-md font-medium transition-colors duration-300 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-900 p-2 rounded-lg">
          Pricing
        </Link>
        <ThemeToggler />
      </div>

      <div className="flex space-x-1">
        {!session.data?.user && <button className="text-md font-medium text-slate-100 bg-slate-900 dark:bg-white dark:text-slate-900 transition-colors duration-300 ease-in-out hover:bg-slate-800 dark:hover:bg-slate-200 p-2 px-3 rounded-xl shadow-lg" onClick={() => signIn()}>
          Login
        </button>}
        {/* <Link href="/signup" className="text-md font-medium text-slate-100 bg-slate-900 dark:bg-white dark:text-slate-900 transition-colors duration-300 ease-in-out hover:bg-slate-800 dark:hover:bg-slate-200 p-2 rounded-xl shadow-lg">
          Sign Up
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;