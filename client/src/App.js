import React, { useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function Header() {
  const [state, setState] = useState({
    stuff: "Some stuff"
  });

  async function getStuff() {
    const { data } = await axios.get("/api/stuff");
    const { stuff } = data;
    setState({ stuff: stuff });
  }

  setTimeout(() => {
    getStuff();
  }, 5000);
  

  return (
    <header>
      <h2>This be the header biatch!!!!</h2>
      <h3>{ state.stuff }</h3>
    </header>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <button>Press this button to hang your hammock here.</button>
    </div>
  );
}

export default App;
