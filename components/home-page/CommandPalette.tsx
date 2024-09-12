import { Dialog, Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, Transition, TransitionChild } from '@headlessui/react';
import { Fragment, useEffect, useState, useRef } from 'react';
import { Search } from "lucide-react";
import { keyboardShortcuts } from '@/lib/data/keyboardShortcuts';

// shoutout to https://www.youtube.com/watch?v=-jix4KyxLuQ

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [isMacOS, setIsMacOS] = useState(false); // State to track OS
  const inputRef = useRef<HTMLInputElement | null>(null); // Ref for input field

  useEffect(() => {
    // Detect macOS or Windows/Linux
    const userAgent = window.navigator.userAgent;
    setIsMacOS(/Macintosh|MacIntel|MacPPC|Mac68K/i.test(userAgent));

    function onKeydown(event: KeyboardEvent) {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        setIsOpen((state) => !state);
      }
    }

    window.addEventListener('keydown', onKeydown);
    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, []);

  useEffect(() => {
    // Automatically focus the input when palette opens
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const filteredKeyboardShortcuts = query
    ? keyboardShortcuts.filter((keyboardShortcut) =>
        keyboardShortcut.description.toLowerCase().includes(query.toLowerCase())
      )
    : keyboardShortcuts;

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        className="fixed inset-0 pt-[25vh] overflow-y-auto z-50"
        open={isOpen}
        onClose={() => setIsOpen(false)} // Close palette when clicking outside
      >
        <TransitionChild
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-white/30 dark:bg-black/30" aria-hidden="true" />
        </TransitionChild>

        <TransitionChild
          enter="duration-300 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="relative max-w-xl mx-auto">
            <Dialog.Panel className="bg-slate-300 dark:bg-slate-700 rounded-xl shadow-2xl ring-1 ring-slate-400/5 dark:ring-slate-600/5 divide-y divide-slate-400 dark:divide-slate-600 overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the palette
            >
              <Combobox as="div">
                <div className="flex items-center px-4">
                  <Search className="mr-2 size-6 shrink-0 opacity-50 text-gray-500 dark:text-gray-400" />
                  <ComboboxInput
                    ref={inputRef} // Attach the ref to the input
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setQuery(event.target.value);
                    }}
                    placeholder="Search..."
                    className="w-full bg-transparent border-0 py-4 pl-3 pr-10 text-sm leading-5 text-slate-900 dark:text-slate-100 focus:ring-0"
                  />
                </div>
                <ComboboxOptions static className="max-h-96 overflow-y-auto">
                  {filteredKeyboardShortcuts.length > 0 ? (
                    filteredKeyboardShortcuts.map(({ id, description, macShortcut, windowsShortcut }) => (
                      <ComboboxOption key={id} value={description}>
                        {({ active }) => (
                          <span
                            className={`flex justify-between px-4 py-3 text-sm ${
                              active ? 'bg-slate-600 text-white' : 'text-gray-700 dark:text-gray-300'
                            }`}
                          >
                            {description}
                            <kbd className="font-mono">
                              {isMacOS ? macShortcut : windowsShortcut}
                            </kbd>
                          </span>
                        )}
                      </ComboboxOption>
                    ))
                  ) : (
                    <p className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300">No shortcuts found...</p>
                  )}
                </ComboboxOptions>
              </Combobox>
            </Dialog.Panel>
          </div>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
}

export default CommandPalette;
