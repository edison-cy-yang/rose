import React, { useState, useEffect } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { CircularProgress } from '@material-ui/core';

function App() {
  const [rose, setRose] = useState(1);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(new Date().getDate());
  
  const pickRandomRose = () => {
    setLoading(true);
    setTimeout(() => {
      const randomNumber = getRandomInt(1, 18);
      console.log(randomNumber);
      setRose(randomNumber);
      setLoading(false);
    }, 500);
  }

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setRose(date);
    }, 1000);
  }, []);

  return (
    <div className="App">    
      <header className="header"> 
        <h1 className="header-text">Welcome, Dijia</h1>
      </header>
      <section className="rose-content">
          {!loading && (          
            <img className="rose" src={`/roses/${rose}.jpg`} alt="rose" style={{width: 1080, height: 700}} />
          )}
          {loading && (
            <div className="loading-indicator">
              <CircularProgress />
            </div>
          )}
          <Button className="rose-btn" variant="contained" color="primary" onClick={pickRandomRose}><span className="btn-text">Get a new flower💐🌷🌸🌹🌺🌻</span></Button>  
      </section>
    </div>
  );
}

export default App;
