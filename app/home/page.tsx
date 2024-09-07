'use client';

import React from 'react';
import Editor from '@/components/Editor';
import DateToday from '@/components/home-page/DateToday';

export default function Home() {
  return (
    <div className='bg-slate-200 dark:bg-slate-900 min-h-screen'>
      <h1>Home</h1>
      <div className='flex justify-end mr-[20rem]'>
        <DateToday />
      </div>
      <div className='mt-10'>
        <Editor />
      </div>
    </div>
  );
}
