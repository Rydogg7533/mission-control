'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/app/components/Navbar';

const STATUS_ORDER = ['backlog', 'in_progress', 'review', 'done', 'blocked'];
const STATUS_LABELS: Record<string, { label: string; color: string; icon: string }> = {
  backlog: { label: 'Backlog', color: 'bg-gray-600', icon: '📋' },
  in_progress: { label: 'In Progress', color: 'bg-yellow-600', icon: '⚙️' },
  review: { label: 'Review', color: 'bg-blue-600', icon: '👀' },
  done: { label: 'Done', color: 'bg-green-600', icon: '✅' },
  blocked: { label: 'Blocked', color: 'bg-red-600', icon: '🚫' },
};

interface Task {
  id: string;
  title: string;
  status: string;
  priority: string;
  project?: string;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    setLoading(true);
    try {
      const res = await fetch('/api/tasks');
      if (!res.ok) {
        console.log('Could not fetch tasks (API not ready yet)');
        return;
      }
      const data = await res.json();
      setTasks(data || []);
    } catch (err) {
      console.log('Tasks API not yet connected');
    } finally {
      setLoading(false);
    }
  }

  const tasksByStatus = STATUS_ORDER.reduce((acc, status) => {
    acc[status] = tasks.filter((t) => t.status === status);
    return acc;
  }, {} as Record<string, Task[]>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2">Tasks Board</h2>
          <p className="text-gray-400">Kanban view of all project tasks</p>
        </div>

        {/* Kanban Board */}
        {loading ? (
          <div className="text-center py-20">
            <p className="text-gray-400">Loading tasks...</p>
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-6">
            {STATUS_ORDER.map((status) => {
              const statusInfo = STATUS_LABELS[status];
              const columnTasks = tasksByStatus[status] || [];

              return (
                <div
                  key={status}
                  className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-4 min-h-96"
                >
                  {/* Column Header */}
                  <div className="mb-4 pb-4 border-b border-gray-700">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{statusInfo.icon}</span>
                      <h3 className="font-bold text-white">{statusInfo.label}</h3>
                    </div>
                    <p className="text-sm text-gray-400">
                      {columnTasks.length} task{columnTasks.length !== 1 ? 's' : ''}
                    </p>
                  </div>

                  {/* Task Cards */}
                  <div className="space-y-3">
                    {columnTasks.length === 0 ? (
                      <div className="text-center py-8 text-gray-500 text-sm">
                        No tasks yet
                      </div>
                    ) : (
                      columnTasks.map((task) => (
                        <div
                          key={task.id}
                          className="bg-gradient-to-r from-gray-700/50 to-gray-600/30 border border-gray-600/50 rounded-lg p-3 hover:border-gray-500 hover:from-gray-700/70 transition-all cursor-pointer group"
                        >
                          <h4 className="font-semibold text-white text-sm group-hover:text-blue-300 transition-colors line-clamp-2">
                            {task.title}
                          </h4>
                          {task.project && (
                            <p className="text-xs text-gray-400 mt-2 bg-gray-800/50 px-2 py-1 rounded w-fit">
                              {task.project}
                            </p>
                          )}
                          <div className="flex items-center justify-between mt-2">
                            <span
                              className={`text-xs px-2 py-1 rounded font-medium ${
                                task.priority === 'urgent'
                                  ? 'bg-red-900/50 text-red-300'
                                  : task.priority === 'high'
                                    ? 'bg-orange-900/50 text-orange-300'
                                    : task.priority === 'medium'
                                      ? 'bg-yellow-900/50 text-yellow-300'
                                      : 'bg-gray-700/50 text-gray-300'
                              }`}
                            >
                              {task.priority}
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {!loading && tasks.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4 opacity-50">📋</div>
            <h3 className="text-2xl font-bold mb-2">No tasks yet</h3>
            <p className="text-gray-400">
              Tasks from ReceiptsFlow, NEXUS, Trading Edge, and other projects will appear here
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
