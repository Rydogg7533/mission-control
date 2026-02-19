'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navbar */}
      <nav className="border-b border-gray-700 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg">
              🎯
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mission Control
            </h1>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4">Command Center</h2>
          <p className="text-xl text-gray-400">Central visibility into all your projects. One dashboard. Total control.</p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          {/* Tasks Card */}
          <Link href="/tasks" className="group">
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 border border-blue-500/30 rounded-xl p-8 hover:border-blue-500/60 hover:from-blue-900/50 transition-all duration-300 cursor-pointer">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📋</div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors">Tasks Board</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Kanban view of all project tasks across teams</p>
              <div className="mt-4 flex items-center gap-2 text-blue-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                View tasks <span>→</span>
              </div>
            </div>
          </Link>

          {/* Activity Card */}
          <Link href="/activity" className="group">
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/10 border border-green-500/30 rounded-xl p-8 hover:border-green-500/60 hover:from-green-900/50 transition-all duration-300 cursor-pointer">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📊</div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-green-300 transition-colors">Activity Feed</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Real-time timeline of all project activities</p>
              <div className="mt-4 flex items-center gap-2 text-green-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                View activity <span>→</span>
              </div>
            </div>
          </Link>

          {/* Calendar Card */}
          <Link href="/calendar" className="group">
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 border border-purple-500/30 rounded-xl p-8 hover:border-purple-500/60 hover:from-purple-900/50 transition-all duration-300 cursor-pointer">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📅</div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-300 transition-colors">Calendar</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Scheduled tasks, automation, and deadlines</p>
              <div className="mt-4 flex items-center gap-2 text-purple-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                View calendar <span>→</span>
              </div>
            </div>
          </Link>

          {/* Memory Card */}
          <Link href="/memory" className="group">
            <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/10 border border-orange-500/30 rounded-xl p-8 hover:border-orange-500/60 hover:from-orange-900/50 transition-all duration-300 cursor-pointer">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🧠</div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-300 transition-colors">Memory</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Search and browse all saved knowledge</p>
              <div className="mt-4 flex items-center gap-2 text-orange-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                View memory <span>→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 rounded-xl p-8 backdrop-blur">
          <h3 className="text-xl font-bold mb-8">Quick Overview</h3>
          <div className="grid grid-cols-4 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-gray-400 text-sm mb-1">Active Projects</p>
              <p className="text-4xl font-bold text-blue-400">5</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="text-gray-400 text-sm mb-1">Total Tasks</p>
              <p className="text-4xl font-bold text-green-400">—</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="text-gray-400 text-sm mb-1">In Progress</p>
              <p className="text-4xl font-bold text-yellow-400">—</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="text-gray-400 text-sm mb-1">Completed This Week</p>
              <p className="text-4xl font-bold text-purple-400">—</p>
            </div>
          </div>
        </div>

        {/* Projects List */}
        <div className="mt-12 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 rounded-xl p-8 backdrop-blur">
          <h3 className="text-xl font-bold mb-6">Connected Projects</h3>
          <div className="grid grid-cols-5 gap-4">
            {[
              { name: 'ReceiptsFlow', icon: '📄', color: 'from-red-500 to-orange-500' },
              { name: 'NEXUS', icon: '📈', color: 'from-blue-500 to-cyan-500' },
              { name: 'Trading Edge', icon: '🤖', color: 'from-purple-500 to-pink-500' },
              { name: 'Weather Bot', icon: '🌤️', color: 'from-yellow-500 to-orange-500' },
              { name: 'Solar Tracker', icon: '☀️', color: 'from-green-500 to-emerald-500' },
            ].map((project) => (
              <div key={project.name} className={`bg-gradient-to-br ${project.color} bg-opacity-10 border border-gray-600/50 rounded-lg p-4 text-center hover:border-gray-400/50 transition-all`}>
                <div className="text-3xl mb-2">{project.icon}</div>
                <p className="text-sm font-medium text-gray-300">{project.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-700 bg-black/50 mt-20 py-8 px-8">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>Mission Control • Global visibility for all your projects</p>
        </div>
      </div>
    </div>
  );
}
