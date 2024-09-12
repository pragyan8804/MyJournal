import { keyboardShortcuts } from "@/lib/data/keyboardShortcuts";

export default function KbdShortcuts() {
  const groupedShortcuts = keyboardShortcuts.reduce((acc, shortcut) => {
    if (!acc[shortcut.title]) {
      acc[shortcut.title] = [];
    }
    acc[shortcut.title].push(shortcut);
    return acc;
  }, {} as { [key: string]: typeof keyboardShortcuts });

  return (
    <div className="bg-slate-200 dark:bg-slate-900 min-h-screen py-10 px-4 sm:px-10 lg:px-20">
      <div className="max-w-3xl mx-auto">

        {Object.entries(groupedShortcuts).map(([title, shortcuts]) => (
          <div key={title} className="mb-12">
            <h2 className="text-3xl font-bold mb-6">{title}</h2>

            {/* Column Headings */}
            <div className="flex justify-between text-xl pb-2 border-b border-slate-500 dark:border-slate-600 mb-4">
              <span className="font-semibold w-1/3">Command</span>
              <span className="font-semibold w-1/3 text-right">Windows/Linux</span>
              <span className="font-semibold w-1/3 text-right">macOS</span>
            </div>

            {/* Shortcuts List */}
            <div className="space-y-4">
              {shortcuts.map((shortcut) => (
                <div
                  key={shortcut.id}
                  className="flex justify-between py-2 border-b border-slate-500 dark:border-slate-600"
                >
                  {/* Command */}
                  <div className="w-1/3">
                    <span>{shortcut.description}</span>
                  </div>

                  {/* Windows/Linux Shortcut */}
                  <div className="w-1/3 flex justify-end space-x-1">
                    {shortcut.windowsShortcut.split(" + ").map((key, index) => (
                      <span
                        key={index}
                        className="text-sm bg-gray-100 dark:bg-gray-700 p-1 rounded border dark:border-slate-600"
                      >
                        {key}
                      </span>
                    ))}
                  </div>

                  {/* macOS Shortcut */}
                  <div className="w-1/3 flex justify-end space-x-1">
                    {shortcut.macShortcut.split(" + ").map((key, index) => (
                      <span
                        key={index}
                        className="text-sm bg-gray-100 dark:bg-gray-700 p-1 rounded border dark:border-slate-600"
                      >
                        {key}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
