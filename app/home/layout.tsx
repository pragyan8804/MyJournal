"use client";

import { HomeSidebar } from "@/components/home-page/HomeSidebar";
import { useRouter } from "next/navigation";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  
  // Get the current path to determine active link
  const activePath = router.pathname;

  return (
    <div className="flex h-screen">
      <HomeSidebar activePath={activePath} />
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
}
