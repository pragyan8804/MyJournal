"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function StartJournalToday() {
  const words = [
    {
      text: "Start",
    },
    {
      text: "your",
    },
    {
      text: "journey",
    },
    {
      text: "today",
    },
    {
      text: "with",
    },
    {
      text: "MyJournal.",
      className: "text-indigo-500 dark:text-blue-500",
    },
                  
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Let's get started
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        {/* <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button> */}
        <Link
            href="/signup"
            className="px-10 py-3 rounded-xl border border-gray-300 bg-white dark:bg-slate-800 dark:text-white text-black text-lg font-semibold hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255)] transition duration-200 hover:rounded-2xl"
            >
                Sign up
        </Link>
      </div>
    </div>
  );
}
