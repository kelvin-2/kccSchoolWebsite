import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'; // make sure Tailwind CSS is imported

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">🎉 Tailwind CSS is Working!</h1>
      <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded">
        Click Me
      </button>
    </div>
  );
}


export default App
