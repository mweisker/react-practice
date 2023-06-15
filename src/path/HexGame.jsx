import HomeButton from '../components/HomeButton'
import '../css/hexGame.css';

import { useState, useEffect } from 'react'

export default function HexGame() {
  const [hex, setHex] = useState([]);
  const [restart, setRestart] = useState(true);

  const total = 3;

  // const correct = Math.floor(Math.random() * total);

  useEffect(() => {
    const hexArray = [];
    for (let i = 0; i < total; i++) {
      const currHex = newHex();
      hexArray.push(currHex);
    }
    setRestart(false);
    setHex(hexArray);
  }, [restart])



  const newHex = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  }

  return (
  <div className='hex-container'>
    <h1>Introducing the super awesome Hex Game!!!</h1>
    { hex }
    <button onClick={() => setRestart(true)}>Restart</button>
    < HomeButton />
  </div>
  );
  }