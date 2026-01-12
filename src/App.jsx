import React, { useState, useRef } from 'react';
import './index.css';

// Get file icon based on extension
function getFileIcon(name) {
  const ext = name.split('.').pop().toLowerCase();
  const iconMap = {
    jsx: '⚛️', js: '🔶', ts: '🔷', tsx: '⚛️',
    css: '🎨', scss: '🎨', html: '🌐', json: '📋',
    md: '📝', png: '🖼️', jpg: '🖼️', svg: '🎭',
    ico: '🔗', txt: '📄'
  };
  return iconMap[ext] || '📄';
}

function Folder({ name, children, open = true, onToggle, depth = 0 }) {
  const [isOpen, setIsOpen] = useState(open);
  const [contextMenu, setContextMenu] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  const copyPath = () => {
    navigator.clipboard.writeText(name);
    setContextMenu(null);
  };

  return (
    <div>
      <div 
        className="flex items-center py-2 px-2 hover:bg-blue-50 rounded cursor-pointer text-gray-700 transition-colors group"
        onContextMenu={handleContextMenu}
      >
        <svg 
          className={`w-4 h-4 mr-2 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
          onClick={handleToggle}
        >
          <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
        </svg>
        <svg className="w-5 h-5 mr-2 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
        </svg>
        <span className="text-sm font-medium">{name}</span>
        <span className="ml-auto text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
          {isOpen ? '▼' : '▶'}
        </span>
      </div>
      
      {contextMenu && (
        <div 
          className="fixed bg-white border border-gray-200 rounded shadow-lg z-50"
          style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }}
        >
          <button 
            onClick={copyPath}
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
          >
            📋 Copy Path
          </button>
          <button 
            onClick={() => setContextMenu(null)}
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
          >
            ✕ Close
          </button>
        </div>
      )}

      {/* Indentation Container */}
      {isOpen && (
        <div className={`pl-6 border-l-2 border-blue-200 ml-3 transition-all`}>
          {children}
        </div>
      )}
    </div>
  );
}

function File({ name, color, depth = 0 }) {
  const [contextMenu, setContextMenu] = useState(null);
  const icon = getFileIcon(name);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  const copyPath = () => {
    navigator.clipboard.writeText(name);
    setContextMenu(null);
  };

  return (
    <div>
      <div 
        className="flex items-center py-2 px-2 hover:bg-blue-50 rounded cursor-pointer text-gray-600 transition-colors group"
        onContextMenu={handleContextMenu}
      >
        <span className="mr-2 text-base">{icon}</span>
        <span className="text-sm">{name}</span>
        <span className="ml-auto text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
          📋
        </span>
      </div>

      {contextMenu && (
        <div 
          className="fixed bg-white border border-gray-200 rounded shadow-lg z-50"
          style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }}
        >
          <button 
            onClick={copyPath}
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
          >
            📋 Copy Name
          </button>
          <button 
            onClick={() => setContextMenu(null)}
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
          >
            ✕ Close
          </button>
        </div>
      )}
    </div>
  );
}

function App() {
  const [expandAll, setExpandAll] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const fileStats = {
    totalFiles: 8,
    totalFolders: 3
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8 font-sans">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">📁 File Tree Explorer</h1>
          <p className="text-slate-600">Interactive hierarchical file structure viewer with Tailwind CSS styling</p>
        </div>

        {/* Main Container */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
          {/* Toolbar */}
          <div className="border-b border-slate-200 p-4 bg-slate-50">
            <div className="flex gap-3 flex-wrap items-center">
              <input 
                type="text" 
                placeholder="🔍 Search files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 min-w-[200px] px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
              <button 
                onClick={() => setExpandAll(!expandAll)}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors"
              >
                {expandAll ? '📦 Collapse All' : '📂 Expand All'}
              </button>
            </div>
            <div className="mt-3 text-xs text-slate-600 flex gap-4">
              <span>📄 Files: <strong>{fileStats.totalFiles}</strong></span>
              <span>📁 Folders: <strong>{fileStats.totalFolders}</strong></span>
            </div>
          </div>

          {/* Tree View */}
          <div className="p-6 max-h-[600px] overflow-y-auto">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">Project Structure</div>
            
            {/* TREE ROOT */}
            <Folder name="src">
              
              <Folder name="components">
                {/* FUTURE BUG: Remove indentation or margin-left here to flatten the tree */}
                <File name="Header.jsx" />
                <File name="Footer.jsx" />
                <File name="Sidebar.jsx" />
              </Folder>

              <Folder name="hooks">
                <File name="useAuth.js" />
              </Folder>
              
              <File name="App.jsx" />
              <File name="index.css" />
              
            </Folder>

            <Folder name="public" open={expandAll}>
              <File name="favicon.ico" />
            </Folder>

            <div className="mt-3">
              <File name="package.json" />
              <File name="README.md" />
              <File name=".gitignore" />
            </div>
          </div>

          {/* Footer Info */}
          <div className="border-t border-slate-200 p-4 bg-slate-50 text-xs text-slate-600">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-slate-700 mb-1">💡 Tips:</p>
                <ul className="space-y-1 text-slate-600">
                  <li>• Click to expand/collapse folders</li>
                  <li>• Right-click for copy options</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-700 mb-1">🎨 Features:</p>
                <ul className="space-y-1 text-slate-600">
                  <li>• File type icons</li>
                  <li>• Interactive tree navigation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
