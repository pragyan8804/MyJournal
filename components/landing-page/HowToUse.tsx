import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function HowToUse() {
  const data = [
    {
      title: "Capture Your Thoughts",
      content: (
        <div>
          <p className="text-slate-800 dark:text-slate-200 text-md md:text-xl font-normal mb-8">
            Capture fleeting moments and immortalize them in your journal. Let your thoughts flow naturally and authentically.
          </p>
          <p className="text-slate-800 dark:text-slate-200 text-md md:text-xl font-normal mb-8">
            Relive those moments by revisiting your entries, and see how your thoughts and perspectives have evolved over time.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/landing/organise.jpg"
              alt="capture your thoughts"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Organize Your Entries",
      content: (
        <div>
          <p className="text-slate-800 dark:text-slate-200 text-md md:text-xl font-normal mb-8">
            Categorize your journal entries by themes, tags, or dates. 
          </p>
          <p className="text-slate-800 dark:text-slate-200 text-md md:text-xl font-normal mb-8">
            Keep everything in order, making it easy to revisit past reflections or track your growth over time.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/landing/thoughts.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Reflect & Grow",
      content: (
        <div>
         <p className="text-slate-800 dark:text-slate-200 text-md md:text-xl font-normal mb-8">
            Reflect on your journey and gain valuable insights from your past experiences. 
          </p>
          <p className="text-slate-800 dark:text-slate-200 text-md md:text-xl font-normal mb-8">
            Use these insights to foster personal growth, as you track your progress and see how far you've come.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/landing/grow.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
