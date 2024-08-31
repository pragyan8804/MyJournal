"use client";

import React from "react";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandApple,
} from "@tabler/icons-react";
import { signIn } from "next-auth/react";

export function LoginForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input mt-5 bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-slate-800 dark:text-slate-200">
        Welcome to MyJournal
      </h2>
      <p className="text-slate-600 text-sm max-w-sm mt-2 dark:text-slate-300">
        Login to MyJournal if you can, Please /\
      </p>

      <form className="my-2" onSubmit={handleSubmit}>

        <div className="bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-slate-900 dark:shadow-[0px_0px_1px_1px_var(--slate-800)]"
            type="submit"
            onClick={() => signIn("google")}
          >
            <IconBrandGoogle className="h-4 w-4 text-slate-800 dark:text-slate-300" />
            <span className="text-slate-700 dark:text-slate-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>

          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-slate-900 dark:shadow-[0px_0px_1px_1px_var(--slate-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-slate-800 dark:text-slate-300" />
            <span className="text-slate-700 dark:text-slate-300 text-sm">
              GitHub (not implemented)
            </span>
            <BottomGradient />
          </button>
          
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-slate-900 dark:shadow-[0px_0px_1px_1px_var(--slate-800)]"
            type="submit"
          >
            <IconBrandApple className="h-4 w-4 text-slate-800 dark:text-slate-300" />
            <span className="text-slate-700 dark:text-slate-300 text-sm">
              Apple (not implemented)
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};