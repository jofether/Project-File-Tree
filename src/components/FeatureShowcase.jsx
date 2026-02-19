import React from 'react';

export default function FeatureShowcase() {
  const features = [
    {
      icon: '🔍',
      title: 'Smart Search',
      description: 'Instantly filter through hundreds of files with powerful search capabilities'
    },
    {
      icon: '🎯',
      title: 'Quick Navigation',
      description: 'Organize your project structure with intuitive folder hierarchy visualization'
    },
    {
      icon: '📋',
      title: 'Copy & Paste',
      description: 'Right-click any file to copy its path directly to your clipboard'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Modern UI with smooth animations and gradient backgrounds'
    }
  ];

  return (
    <div className="py-12 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          ✨ Key Features
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-xl border-2 border-gray-100 hover:border-blue-400 hover:shadow-lg transition-all group cursor-pointer bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50">
      <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
