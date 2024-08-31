import { FeatureHero } from "@/components/feature-page/FeatureHero";
import FeaturesSection from "@/components/feature-page/FeaturesSection";
import Navbar from "@/components/Navbar";


export default function home() {
    return (
        <div className="bg-slate-100 dark:bg-slate-950">
            <Navbar />
            <FeatureHero />
            <FeaturesSection />
        </div>
    )
}