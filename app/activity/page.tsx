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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Activity Feed</h1>
              <p className="text-gray-600 dark:text-gray-400">Timeline of all project activities</p>
            </div>
            <a href="/" className="text-blue-600 hover:text-blue-700">← Back</a>
          </div>
        </div>

        {/* Timeline */}
        {loading ? (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-400">Loading activity...</p>
          </div>
        ) : activity.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No activity entries yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {activity.map((entry) => (
              <div key={entry.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {getActorEmoji(entry.actor)} {entry.title}
                      {entry.project && <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">({entry.project})</span>}
                    </p>
                    {entry.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{entry.description}</p>
                    )}
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-400 flex-shrink-0 ml-4">
                    {new Date(entry.created_at).toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
