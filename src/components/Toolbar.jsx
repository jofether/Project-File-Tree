import React from 'react';

export default function Toolbar({ searchQuery, onSearchChange, expandAll, onToggleExpand, fileStats }) {
  return (
    <div className="border-b border-gray-200 p-6 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="flex gap-3 flex-wrap items-center mb-4">
        <div className="flex-1 min-w-[250px] relative">
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="🔍 Search files or folders..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
          />
        </div>
        <button 
          onClick={onToggleExpand}
          className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-lg transform hover:scale-105"
        >
          {expandAll ? '📦 Collapse All' : '📂 Expand All'}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <StatBox label="💾 Total Files" value={fileStats.totalFiles} />
        <StatBox label="📁 Total Folders" value={fileStats.totalFolders} />
        <StatBox label="⚡ Ready to Deploy" value="Yes" />
      </div>
    </div>
  );
}

function StatBox({ label, value }) {
  return (
    <div className="bg-white rounded-lg p-3 border border-gray-200 hover:border-blue-300 transition-colors">
      <p className="text-xs text-gray-600">{label}</p>
      <p className="text-lg font-bold text-gray-800 mt-1">{value}</p>
    </div>
  );
}
