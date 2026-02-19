'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-black/80 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
              🎯
            </div>
            <h1 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
              Mission Control
            </h1>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-8">
            <Link
              href="/tasks"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                isActive('/tasks')
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/50'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
              }`}
            >
              <span>📋</span>
              <span className="text-sm font-medium">Tasks</span>
            </Link>

            <Link
              href="/activity"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                isActive('/activity')
                  ? 'bg-green-500/20 text-green-300 border border-green-500/50'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
              }`}
            >
              <span>📊</span>
              <span className="text-sm font-medium">Activity</span>
            </Link>

            <Link
              href="/calendar"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                isActive('/calendar')
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
              }`}
            >
              <span>📅</span>
              <span className="text-sm font-medium">Calendar</span>
            </Link>

            <Link
              href="/memory"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                isActive('/memory')
                  ? 'bg-orange-500/20 text-orange-300 border border-orange-500/50'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
              }`}
            >
              <span>🧠</span>
              <span className="text-sm font-medium">Memory</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
