import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Playlist from './components/Playlist';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import LockedContextProvider from './contexts/LockedContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <LockedContextProvider>
          <Navbar />
          <Playlist />
          <ThemeToggle />
        </LockedContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
