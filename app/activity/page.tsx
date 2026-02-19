'use client';

import { useState, useEffect } from 'react';

interface ActivityEntry {
  id: string;
  actor: string;
  action_type: string;
  title: string;
  project?: string;
  description?: string;
  created_at: string;
}

export default function ActivityPage() {
  const [activity, setActivity] = useState<ActivityEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchActivity();
  }, []);

  async function fetchActivity() {
    setLoading(true);
    try {
      const res = await fetch('/api/activity?limit=100');
      if (!res.ok) throw new Error('Failed to fetch activity');
      const data = await res.json();
      setActivity(data);
    } catch (err) {
      console.error('Error fetching activity:', err);
    } finally {
      setLoading(false);
    }
  }

  const getActorEmoji = (actor: string) => {
    const emojis: Record<string, string> = {
      tom: '🤖',
      ryan: '🧑',
      system: '⚙️',
      cron: '⏰',
      bot: '🤖',
    };
    return emojis[actor] || '📋';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <div className="border-b border-gray-700 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">📊 Activity Feed</h1>
            <p className="text-gray-400 text-sm mt-1">Real-time timeline of all project activities</p>
          </div>
          <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors">← Back</a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-8">
        <div className="mb-8">

        {/* Timeline */}
        {loading ? (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-400">Loading activity...</p>
          </div>
        ) : activity.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4 opacity-50">🎯</div>
            <p className="text-gray-400 text-lg">No activity yet. Start logging activities from your projects!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {activity.map((entry, idx) => (
              <div 
                key={entry.id}
                className="group bg-gradient-to-r from-gray-800/50 to-gray-700/30 border border-gray-600/50 p-4 rounded-lg hover:border-gray-500/80 hover:from-gray-800/80 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{getActorEmoji(entry.actor)}</span>
                      <p className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {entry.title}
                      </p>
                      {entry.project && (
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full font-mono">
                          {entry.project}
                        </span>
                      )}
                    </div>
                    {entry.description && (
                      <p className="text-sm text-gray-400 ml-11 group-hover:text-gray-300 transition-colors">
                        {entry.description}
                      </p>
                    )}
                  </div>
                  <span className="text-xs text-gray-500 flex-shrink-0 ml-4 group-hover:text-gray-400 transition-colors">
                    {new Date(entry.created_at).toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
