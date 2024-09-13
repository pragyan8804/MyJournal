// loading.tsx
import React from 'react';

const Shimmer = () => {
  return (
    <div className="min-h-screen bg-slate-200 dark:bg-slate-900 flex flex-col pt-1 px-2">
      <div className="w-full ">
        {/* Shimmer for the header */}
        <div className="animate-pulse flex justify-between gap-5">
          <div className="h-8 bg-slate-300 dark:bg-slate-700 rounded w-8 m-1"></div>

          <div className='flex gap-5 w-1/3 items-center justify-end'>
            <div className="h-8 bg-slate-300 dark:bg-slate-700 rounded w-8 mb-4"></div>
            <div className="h-8 bg-slate-300 dark:bg-slate-700 rounded w-1/2 mb-4"></div>
          </div>

        </div>

        <hr className="border-slate-300 dark:border-slate-700" />

        {/* Shimmer for the editor area */}
        <div className="animate-pulse mt-14 max-w-3xl mx-auto">
          <div className="h-10 bg-slate-300 dark:bg-slate-700 rounded mb-4"></div>
        </div>

      </div>
    </div>
  );
};

export default Shimmer;
