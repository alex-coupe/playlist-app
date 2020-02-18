import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Playlist from './components/Playlist';
import ThemeContextProvider from './contexts/ThemeContext';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Playlist />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
