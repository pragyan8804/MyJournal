"use client";

import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import Navbar from "@/components/Navbar";

export default function TechStack() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-[40rem] flex-col px-4">
        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
          <LinkPreview
            url="https://nextjs.org"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-500 dark:from-gray-200 dark:to-gray-400"
          >
            Next.js
          </LinkPreview>{" "}
          powers both the frontend and backend, offering full-stack capabilities.
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
          <LinkPreview
            url="https://next-auth.js.org"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-300 dark:to-purple-400"
          >
            NextAuth
          </LinkPreview>{" "}
          provides a secure and flexible solution for managing user authentication seamlessly.
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
          <LinkPreview
            url="https://ui.aceternity.com"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-300 dark:to-pink-400"
          >
            Aceternity UI
          </LinkPreview>{" "}
          combined with{" "}
          <LinkPreview
            url="https://tailwindcss.com"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-200 dark:to-blue-400"
          >
            Tailwind CSS
          </LinkPreview>{" "}
          creates a modern and responsive UI.
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
          <LinkPreview
            url="https://www.prisma.io"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600 dark:from-indigo-200 dark:to-indigo-400"
          >
            Prisma ORM
          </LinkPreview>{" "}
          and{" "}
          <LinkPreview
            url="https://www.postgresql.org"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-600 dark:from-green-200 dark:to-cyan-400"
          >
            Postgres
          </LinkPreview>{" "}
          ensure robust and scalable data management.
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
          <LinkPreview
            url="https://tiptap.dev"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300 dark:from-blue-300 dark:to-blue-100"
          >
            Tiptap
          </LinkPreview>{" "}
          provides a powerful and customizable editor experience.
        </p>
      </div>
    </>
  );
}
