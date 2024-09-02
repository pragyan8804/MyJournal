"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconCalendarMonth
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function HomeSidebar() {
  const links = [
  {
    label: "Journals",
    href: "/home/journals",
    icon: (
      <IconBrandTabler className="text-slate-700 dark:text-slate-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Your Journals",
    href: "/home/journals",
    icon: (
      <IconCalendarMonth className="text-slate-700 dark:text-slate-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Profile",
    href: "/home/profile",
    icon: (
      <IconUserBolt className="text-slate-700 dark:text-slate-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Settings",
    href: "/home/settings",
    icon: (
      <IconSettings className="text-slate-700 dark:text-slate-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Logout",
    href: "/logout",
    icon: (
      <IconArrowLeft className="text-slate-700 dark:text-slate-200 h-5 w-5 flex-shrink-0" />
    ),
  },
];

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-slate-100 dark:bg-slate-500 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Pragyan Pandey",
                href: "/home/profile",
                icon: (
                  <Image
                    src="/images/landing/grow.jpg"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      {/* <Dashboard /> */}
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="/home"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
    <Image src="/logo.jpg"
        width={50}
        height={50}
        alt="Avatar"
        className="h-7 w-7 flex-shrink-0 rounded-full" />
        
      {/* <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" /> */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        MyJournal
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
        <Image src="/logo.jpg"
            width={50}
            height={50}
            alt="Avatar"
            className="h-7 w-7 flex-shrink-0 rounded-full" />
    </Link>
  );
};

// Dummy dashboard component with content
// const Dashboard = () => {
//   return (
//     <div className="flex flex-1">
//       <div className="p-2 md:p-10 rounded-tl-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex flex-col gap-2 flex-1 w-full h-full">
//         <div className="flex gap-2">
//           {[...new Array(4)].map((i) => (
//             <div
//               key={"first-array" + i}
//               className="h-20 w-full rounded-lg  bg-slate-100 dark:bg-slate-800 animate-pulse"
//             ></div>
//           ))}
//         </div>
//         <div className="flex gap-2 flex-1">
//           {[...new Array(2)].map((i) => (
//             <div
//               key={"second-array" + i}
//               className="h-full w-full rounded-lg  bg-slate-100 dark:bg-slate-800 animate-pulse"
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
