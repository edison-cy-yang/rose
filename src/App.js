import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  const [rose, setRose] = useState(0);
  
  const pickRandomRose = () => {
    const randomNumber = getRandomInt(0, 3);
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
      <img className="rose" src={`/roses/${rose}.jpg`} alt="rose" style={{width: 700, height: 700}} />    
      <Button variant="contained" color="primary" onClick={pickRandomRose}>Get a new rose</Button>      
    </div>
  );
}

export default App;
