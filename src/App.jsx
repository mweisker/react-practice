import { Routes, Route } from 'react-router-dom';
import Welcome from './path/Welcome';
import HexGame from './path/HexGame';

export default function App() {
  return (
  <div>
  <Routes>
    <Route path='/' element={ <Welcome/> } />
    <Route path='/hexgame' element={ <HexGame/>} />
  </Routes>
  </div>
  );
  }