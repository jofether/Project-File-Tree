import React from 'react';

export default function Footer() {
  return (
    <div className="border-t border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
          <p className="font-bold text-gray-800 mb-3 text-lg">💡 Tips & Tricks</p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>✓ Click on folder icons to expand/collapse directories</li>
            <li>✓ Right-click any item to copy its path</li>
            <li>✓ Use the search bar to quickly filter files</li>
            <li>✓ Toggle "Expand All" to see the complete structure</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
          <p className="font-bold text-gray-800 mb-3 text-lg">🎨 Features</p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>✓ Rich file type icons and emojis</li>
            <li>✓ Interactive tree-view navigation</li>
            <li>✓ Context menus for quick actions</li>
            <li>✓ Beautiful gradient UI with smooth animations</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard 
            icon="⚛️" 
            title="React 18" 
            description="Modern component-based architecture"
          />
          <InfoCard 
            icon="🎨" 
            title="Tailwind CSS" 
            description="Utility-first styling with beautiful design"
          />
          <InfoCard 
            icon="⚡" 
            title="Vite" 
            description="Lightning-fast build tool and dev server"
          />
        </div>
      </div>

      <div className="mt-8 text-center pt-6 border-t border-gray-200">
        <p className="text-gray-600 text-sm">
          Made with ❤️ | <span className="font-semibold text-gray-800">File Tree Explorer v1.0</span>
        </p>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, description }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-100 hover:shadow-md transition-shadow text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <p className="font-semibold text-gray-800 mb-1">{title}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
