"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export function FeatureHero() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-slate-700 dark:text-slate-300 max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        Capture every thought, dream, and moment. 
        Your life, beautifully{" "}
        <Highlight className="text-slate-900 dark:text-slate-200">
          documented and preserved.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
