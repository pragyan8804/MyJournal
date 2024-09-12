import React from "react";
import { Search } from "lucide-react";

const SearchBar: React.FC = () => {
  return (
    <div
      className="flex items-center border border-gray-300 dark:border-slate-600 rounded-md px-3 py-1 bg-white dark:bg-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
    >
      <Search className="mr-2 size-4 shrink-0 opacity-50 text-gray-500 dark:text-gray-400" />
      <div className="flex-grow text-sm text-gray-500 dark:text-gray-400 mx-2">
        shortcuts
      </div>
      <div className="ml-2 text-gray-500 dark:text-gray-400 text-xs flex items-center gap-1">
        <span className="bg-gray-100 dark:bg-gray-700 p-1 rounded border dark:border-slate-600">⌘</span>
        <span>+</span>
        <span className="bg-gray-100 dark:bg-gray-700 p-1 rounded border dark:border-slate-600">K</span>
      </div>
    </div>
  );
};

export default SearchBar;
