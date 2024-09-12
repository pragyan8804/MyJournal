"use client";

import CommandPalette from "@/components/home-page/CommandPalette";
import { HomeSidebar } from "@/components/home-page/HomeSidebar";
import { usePathname } from "next/navigation";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const activePath = usePathname(); // Get the current path to determine the active link

  return (
    <div className="flex h-screen">
      <CommandPalette  />
      <HomeSidebar activePath={activePath} />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
