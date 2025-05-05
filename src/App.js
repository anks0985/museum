import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Catalogue from './components/Catalogue';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/catalogue" element={<Catalogue />} />
        </Routes>
      </main>

      {/* Optional shared footer */}
      <footer className="p-4 bg-[#bf9347] text-[#fffdf8] text-center text-sm">
        © 2025 The Nuseum - A Museum Without Walls
      </footer>
    </div>
  );
}

export default App;
