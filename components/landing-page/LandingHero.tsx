"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export function LandingHero() {
  const { theme } = useTheme();

  const imageSrc =
    theme === "dark"
      ? "/images/landing/JournalAppDark.jpg"
      : "/images/landing/JournalAppLight.jpg";

  return (
    <>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-slate-800 dark:text-slate-100 mt-20">
              Capture Your Moments,{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500">
                Your Way
              </span>
              .
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-2 leading-none">
                MyJournal
              </span>
            </h1>
            <button className="mt-10">
              <Link
                href="/signup"
                className="px-10 py-3 rounded-xl border border-gray-300 bg-white dark:bg-slate-800 dark:text-white text-black text-lg font-semibold hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255)] transition duration-200 hover:rounded-2xl"
              >
                Get Started
              </Link>
            </button>
          </>
        }
      >
        <Image
          src={imageSrc}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </>
  );
}
