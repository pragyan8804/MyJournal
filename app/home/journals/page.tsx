'use client';

import DateToday from "@/components/home-page/DateToday";

export default function JournalsPage() {

  return (
    <div className="min-h-screen p-6">
      <DateToday />
      <h1 className="text-3xl font-bold mt-4">Your Journals</h1>
    </div>
  );
}
