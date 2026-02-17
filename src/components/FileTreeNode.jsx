import React, { useState } from 'react';

function getFileIcon(name) {
  const ext = name.split('.').pop().toLowerCase();
  const iconMap = {
    jsx: '⚛️', js: '🔶', ts: '🔷', tsx: '⚛️',
    css: '🎨', scss: '🎨', html: '🌐', json: '📋',
    md: '📝', png: '🖼️', jpg: '🖼️', svg: '🎭',
    ico: '🔗', txt: '📄', ts: '📘', tsx: '📘',
    java: '☕', py: '🐍', rb: '💎', php: '🐘',
    config: '⚙️', lock: '🔒', env: '🔑'
  };
  return iconMap[ext] || '📄';
}

export function Folder({ name, children, open = true, depth = 0 }) {
  const [isOpen, setIsOpen] = useState(open);
  const [contextMenu, setContextMenu] = useState(null);

  const handleToggle = () => setIsOpen(!isOpen);

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
        className="flex items-center py-2 px-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-md cursor-pointer text-gray-700 transition-all group"
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
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="ml-auto text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
          🔗
        </span>
      </div>
      
      {contextMenu && (
        <div 
          className="fixed bg-white border border-gray-200 rounded-md shadow-xl z-50"
          style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }}
        >
          <button 
            onClick={copyPath}
            className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors border-b border-gray-100 font-medium text-gray-700"
          >
            📋 Copy Path
          </button>
          <button 
            onClick={() => setContextMenu(null)}
            className="w-full text-left px-4 py-2 text-sm hover:bg-red-50 transition-colors text-gray-700"
          >
            ✕ Close
          </button>
        </div>
      )}

      {isOpen && (
        <div className="pl-4 border-l-2 border-blue-200 ml-2 transition-all">
          {children}
        </div>
      )}
    </div>
  );
}

export function File({ name, depth = 0 }) {
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
        className="flex items-center py-2 px-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-md cursor-pointer text-gray-600 transition-all group"
        onContextMenu={handleContextMenu}
      >
        <span className="mr-2 text-base ml-6">{icon}</span>
        <span className="text-sm text-gray-700">{name}</span>
        <span className="ml-auto text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
          📋
        </span>
      </div>

      {contextMenu && (
        <div 
          className="fixed bg-white border border-gray-200 rounded-md shadow-xl z-50"
          style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }}
        >
          <button 
            onClick={copyPath}
            className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors border-b border-gray-100 font-medium text-gray-700"
          >
            📋 Copy Name
          </button>
          <button 
            onClick={() => setContextMenu(null)}
            className="w-full text-left px-4 py-2 text-sm hover:bg-red-50 transition-colors text-gray-700"
          >
            ✕ Close
          </button>
        </div>
      )}
    </div>
  );
}
