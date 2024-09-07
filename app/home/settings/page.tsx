import { ThemeToggler } from "@/components/theme/ThemeToggler";

export default function settings() {
    return (
        <div className="bg-slate-200 dark:bg-slate-900 min-h-screen">
            Settings
            <div>
                <ThemeToggler />
            </div>
        </div>
    )
}