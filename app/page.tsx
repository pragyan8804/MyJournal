import Footer from "@/components/Footer";
import { HowToUse } from "@/components/landing-page/HowToUse";
import { LandingHero } from "@/components/landing-page/LandingHero";
import { StartJournalToday } from "@/components/landing-page/StartJournalToday";
import { Navbar } from "@/components/Navbar";
import { RedirectIfLoggedIn } from "@/components/redirect/RedirectIfLoggedIn";

export default function Home() {
  return (
   <div className="bg-slate-100 dark:bg-slate-950">
    <Navbar />
    <RedirectIfLoggedIn /> {/* if already logged in then redirect to home page */}
    <LandingHero />
    <HowToUse />
    <StartJournalToday />
    <Footer />
   </div>
  );
}
