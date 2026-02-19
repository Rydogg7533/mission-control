'use client';

export default function MemoryPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Memory Viewer</h1>
            <p className="text-gray-600 dark:text-gray-400">Search Tom's memory files</p>
          </div>
          <a href="/" className="text-blue-600 hover:text-blue-700">← Back</a>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">Memory viewer coming soon...</p>
        </div>
      </div>
    </div>
  );
}
