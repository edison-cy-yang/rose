import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Resizer from 'react-image-file-resizer';

function App() {
  const [rose, setRose] = useState(0);
  
  const pickRandomRose = () => {
    const randomNumber = getRandomInt(0, 11);
    console.log(randomNumber);
    setRose(randomNumber);
  }

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="App">    
      <header className="header"> 
        <h1 className="header-text">Welcome, Dijia</h1>
      </header>
      <section className="rose-content">
          <img className="rose" src={`/roses/${rose}.jpg`} alt="rose" style={{width: 1080, height: 780}} />    
          <Button className="rose-btn" variant="contained" color="primary" onClick={pickRandomRose}>Get a new rose</Button>      
      </section>
    </div>
  );
}

export default App;
