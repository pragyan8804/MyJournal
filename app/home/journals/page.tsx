'use client';

import DateToday from "@/components/home-page/DateToday";
import YourJournals from "@/components/journals-page/YourJournals";

export default function JournalsPage() {
  const userId = 'your-user-id'; // Replace with actual user ID logic

  return (
    <div className="min-h-screen p-6">
      <DateToday />
      <h1 className="text-3xl font-bold mt-4">Your Journals</h1>
      <YourJournals userId={userId} />
    </div>
  );
}
