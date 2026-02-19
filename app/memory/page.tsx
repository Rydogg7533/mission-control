'use client';

export default function MemoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <div className="border-b border-gray-700 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">🧠 Memory Viewer</h1>
            <p className="text-gray-400 text-sm mt-1">Search and browse all saved knowledge</p>
          </div>
          <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors">← Back</a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 rounded-xl p-12 backdrop-blur text-center">
          <div className="text-6xl mb-4 opacity-50">🧠</div>
          <h2 className="text-2xl font-bold mb-2">Memory Viewer Coming Soon</h2>
          <p className="text-gray-400">Full-text search across all memory files, tags, and knowledge base.</p>
        </div>
      </div>
    </div>
  );
}
