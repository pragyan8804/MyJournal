'use client';

import React from 'react';
// import Editor from '@/components/home-page/Editor';
import DateToday from '@/components/home-page/DateToday';
// import Tiptap from '@/components/home-page/TipTap';
import { ReadmeEditor } from '@/components/editor/readme-editor';

export default function Home() {
  return (
    <div className='bg-slate-200 dark:bg-slate-900'>
      <h1>Home</h1>
      <div className='flex justify-end mr-[20rem]'>
        <DateToday />
      </div>
      <div className='mt-10 max-w-5xl mx-auto'>
        {/* <Editor /> */}
        {/* <Tiptap /> */}
        <ReadmeEditor />
      </div>
    </div>
  );
}
