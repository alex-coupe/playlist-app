import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Playlist from './components/Playlist';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Playlist />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
