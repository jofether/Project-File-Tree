import React from 'react';

export default function Header() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16 px-8 z-0">
      {/* Animated background shapes */}
      <div className="absolute top-0 right-0 -mt-40 -mr-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-40 -ml-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl -mb-80"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-5xl">📁</div>
          <h1 className="text-5xl font-bold">File Tree Explorer</h1>
        </div>
        <p className="text-lg text-blue-100 font-light mb-2">
          A beautiful, interactive hierarchical file structure viewer
        </p>
        <p className="text-blue-100 opacity-80 text-sm">
          Built with React, Tailwind CSS, and modern web technologies
        </p>
      </div>
    </div>
  );
}
