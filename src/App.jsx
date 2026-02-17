import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import Footer from './components/Footer';
import FeatureShowcase from './components/FeatureShowcase';
import { Folder, File } from './components/FileTreeNode';

function App() {
  const [expandAll, setExpandAll] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const fileStats = {
    totalFiles: 24,
    totalFolders: 8
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Feature Showcase */}
      <FeatureShowcase />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Toolbar */}
        <Toolbar 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          expandAll={expandAll}
          onToggleExpand={() => setExpandAll(!expandAll)}
          fileStats={fileStats}
        />

        {/* Tree View Container */}
        <div className="bg-white border-l-4 border-r-4 border-b-4 border-gray-200 rounded-b-xl shadow-lg">
          <div className="p-8">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6 px-2">
              📂 Project Structure
            </div>
            
            {/* TREE ROOT */}
            <div className="space-y-1">
              <Folder name="src" open={expandAll}>
                <Folder name="components" open={expandAll}>
                  <File name="Header.jsx" />
                  <File name="FileTreeNode.jsx" />
                  <File name="Toolbar.jsx" />
                  <File name="Footer.jsx" />
                  <File name="FeatureShowcase.jsx" />
                </Folder>

                <Folder name="hooks" open={expandAll}>
                  <File name="useAuth.js" />
                  <File name="useFetch.js" />
                  <File name="useLocalStorage.js" />
                </Folder>

                <Folder name="utils" open={expandAll}>
                  <File name="constants.js" />
                  <File name="helpers.js" />
                  <File name="validators.js" />
                </Folder>

                <Folder name="assets" open={expandAll}>
                  <File name="logo.svg" />
                  <File name="background.png" />
                </Folder>

                <File name="App.jsx" />
                <File name="index.css" />
                <File name="main.jsx" />
              </Folder>

              <Folder name="public" open={expandAll}>
                <File name="favicon.ico" />
                <File name="vite.svg" />
              </Folder>

              <Folder name=".github" open={false}>
                <Folder name="workflows" open={false}>
                  <File name="deploy.yml" />
                </Folder>
              </Folder>

              <File name="package.json" />
              <File name="package-lock.json" />
              <File name="README.md" />
              <File name=".gitignore" />
              <File name="vite.config.js" />
              <File name="tailwind.config.js" />
              <File name="postcss.config.js" />
              <File name="index.html" />
              <File name=".env.example" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard icon="📁" label="Directories" value={fileStats.totalFolders} color="from-blue-400 to-blue-600" />
          <StatCard icon="📄" label="Files" value={fileStats.totalFiles} color="from-purple-400 to-purple-600" />
          <StatCard icon="💾" label="Project Size" value="2.4 MB" color="from-pink-400 to-pink-600" />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, color }) {
  return (
    <div className={`bg-gradient-to-br ${color} text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105`}>
      <div className="text-4xl mb-2">{icon}</div>
      <p className="text-sm opacity-90 mb-1">{label}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}

export default App;
