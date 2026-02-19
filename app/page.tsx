'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Mission Control</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Global visibility dashboard for all projects</p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          <Link href="/tasks">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">📋</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Tasks Board</h2>
              <p className="text-gray-600 dark:text-gray-400">Kanban board for all project tasks</p>
            </div>
          </Link>

          <Link href="/activity">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">📊</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Activity Feed</h2>
              <p className="text-gray-600 dark:text-gray-400">Timeline of all project activities</p>
            </div>
          </Link>

          <Link href="/calendar">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">📅</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Calendar</h2>
              <p className="text-gray-600 dark:text-gray-400">Scheduled tasks and automation</p>
            </div>
          </Link>

          <Link href="/memory">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">🧠</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Memory</h2>
              <p className="text-gray-600 dark:text-gray-400">Search saved memory files</p>
            </div>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Overview</h3>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Active Projects</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">5</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Total Tasks</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">—</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">In Progress</p>
              <p className="text-3xl font-bold text-yellow-600">—</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">This Week</p>
              <p className="text-3xl font-bold text-green-600">—</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
