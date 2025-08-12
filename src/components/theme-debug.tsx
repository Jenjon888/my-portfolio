'use client';

import { useTheme } from './theme-provider';

export function ThemeDebug() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 bg-background border border-border p-4 rounded-lg shadow-lg z-50">
      <h3 className="text-sm font-semibold mb-2">Theme Debug</h3>
      <p className="text-xs mb-2">Current theme: {theme}</p>
      <div className="flex gap-2">
        <button
          onClick={() => setTheme('light')}
          className="px-2 py-1 text-xs bg-blue-500 text-white rounded"
        >
          Light
        </button>
        <button
          onClick={() => setTheme('dark')}
          className="px-2 py-1 text-xs bg-gray-800 text-white rounded"
        >
          Dark
        </button>
      </div>
    </div>
  );
}
