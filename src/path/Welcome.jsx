import Sammy from '../img/sammy.jpeg';
import '../css/main.css';

import { useNavigate } from 'react-router-dom';


export default function Welcome() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  }

  return (
  <div>
    <div className="wrapper">
      <h1 className='welcome-message'>Welcome To My App</h1>
      <p>This is going to be the coolest app in the world!</p>
      <img src={Sammy} width={200} height={200} ></img>
    </div>
    <div className='pathways'>
      <h1>Choose your pathway</h1>
      <div className='pathway-container'>
        <button onClick={() => handleClick('/hexgame')}>Hex Game</button>
      </div>
    </div>
  </div>
  );
  }