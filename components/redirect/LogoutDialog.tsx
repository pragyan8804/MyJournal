import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { signOut } from "next-auth/react"
import Link from "next/link"

export function LogoutDialog() {
  const [isMounted, setIsMounted] = useState(false);

  // Ensure the dialog is only rendered after the component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Render null until the component is mounted
  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-[425px] bg-slate-300 dark:bg-slate-700 border-none">
        <DialogHeader>
          <DialogTitle className="text-slate-900 dark:text-slate-100 mb-3">Logout</DialogTitle>
          <DialogDescription className="text-slate-900 dark:text-slate-100">
            Are you sure you wanna logout.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Link href="/home">
             <Button type="submit" className="bg-slate-400 dark:bg-slate-600 hover:bg-slate-500 dark:hover:bg-slate-500">Go back</Button>
          </Link>
          <Link href="/">
            <Button type="submit" className="bg-red-400 dark:bg-red-600 hover:bg-red-500 dark:hover:bg-red-500" onClick={() => signOut()}>Yes</Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
