import React, { useState, useEffect } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { CircularProgress } from '@material-ui/core';

function App() {
  const [rose, setRose] = useState(1);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(new Date().getDate());
  const [requested, setRequested] = useState(false);
  
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

  const requestFlower = () => {
    setLoading(true);
    setRequested(true);
    setTimeout(() => {
      setRose(date);
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    // setTimeout(() => {
    //   setLoading(false);
    //   setRose(date);
    // }, 1000);
  }, []);

  return (
    <div className="App">    
      <header className="header"> 
        <h1 className="header-text">Welcome, Dijia</h1>
      </header>
      <section className="rose-content">
        
          {!loading && requested && (          
            <img className="rose" src={`/roses/${rose}.jpg`} alt="rose" style={{width: 1080, height: 700}} />
          )}
          {requested && loading && (
            <div className="loading-indicator">
              <CircularProgress />
            </div>
          )}
          <Button className="rose-btn" variant="contained" color="primary" onClick={requestFlower}><span className="btn-text">Request today's flower💐🌷🌸🌹🌺🌻</span></Button>  
      </section>
    </div>
  );
}

export default App;
