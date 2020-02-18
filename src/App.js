import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Playlist from './components/Playlist';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Playlist />
    </div>
  );
}

export default App;
