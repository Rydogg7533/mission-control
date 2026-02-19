'use client';

import Navbar from '@/app/components/Navbar';

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2">Calendar</h2>
          <p className="text-gray-400">Scheduled tasks and automation</p>
        </div>

        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 rounded-xl p-12 backdrop-blur text-center">
          <div className="text-6xl mb-4 opacity-50">📅</div>
          <h2 className="text-2xl font-bold mb-2">Calendar Coming Soon</h2>
          <p className="text-gray-400">Monthly view of all scheduled tasks, deadlines, and automated jobs.</p>
        </div>
      </div>
    </div>
  );
}
