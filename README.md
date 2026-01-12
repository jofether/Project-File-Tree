# File Tree Explorer

A React component that displays a hierarchical file tree structure using indentation levels for visual hierarchy. This project is designed to train models to recognize parent-child relationships based on indentation.

## Features

- Interactive folder and file visualization
- Visual hierarchy through indentation (left padding)
- Folder expand/collapse indicators
- Color-coded file types
- Hover effects for better UX

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build

To build for production:
```bash
npm run build
```

## Project Structure

- `src/App.jsx` - Main component with the file tree explorer
- `src/main.jsx` - React entry point
- `src/index.css` - Tailwind CSS imports
- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration

## Components

### Folder Component
Renders a folder with expandable/collapsible children. Uses visual indentation to show hierarchy.

### File Component
Renders a file item with a color indicator dot.

## Notes

The project includes a future bug comment indicating where indentation can be removed to test hierarchy flattening scenarios.
