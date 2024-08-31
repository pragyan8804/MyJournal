import { HowToUse } from "@/components/landing-page/HowToUse";
import { LandingHero } from "@/components/landing-page/LandingHero";
import { StartJournalToday } from "@/components/landing-page/StartJournalToday";
import { Navbar } from "@/components/Navbar";
import { Redirect } from "@/components/Redirect";

export default function Home() {
  return (
   <div className="bg-slate-100 dark:bg-slate-950">
    <Navbar />
    <Redirect /> {/* if already logged in then redirect to home page */}
    <LandingHero />
    <HowToUse />
    <StartJournalToday />
   </div>
  );
}
