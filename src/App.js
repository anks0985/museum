import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import Catalogue from './components/Catalogue';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Optional shared header/nav */}
      <header className="p-4 bg-gray-900 text-white flex justify-center space-x-8">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/catalogue" className="hover:underline">Catalogue</Link>
      </header>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/catalogue" element={<Catalogue />} />
        </Routes>
      </main>

      {/* Optional shared footer */}
      <footer className="p-4 bg-gray-100 text-center text-sm">
        © 2025 The Museum – The Silent Heritage
      </footer>
    </div>
  );
}

export default App;
