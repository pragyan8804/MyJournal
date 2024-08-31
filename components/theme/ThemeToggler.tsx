'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { SunDim, Moon } from 'lucide-react';

export function ThemeToggler() {
  const { setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Determine the icon to display based on the current theme
  const currentTheme = theme === 'system' ? systemTheme : theme;

  if (!mounted) return null; // Ensure the component doesn't render on the server side

  return (
    <button
      onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
      className="relative p-2 bg-slate-100 dark:bg-slate-950 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-900 transition-colors border-slate-300 dark:border-slate-700"
      aria-label="Toggle Theme"
    >
      <SunDim className={`h-5 w-5 text-slate-800 ${currentTheme === 'light' ? 'block' : 'hidden'}`} />
      <Moon className={`h-5 w-5 text-slate-200 ${currentTheme === 'dark' ? 'block' : 'hidden'}`} />
    </button>
  );
}