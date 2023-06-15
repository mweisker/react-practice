import { useNavigate } from 'react-router-dom';
import '../css/HomeButton.css'


export default function Welcome() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
  <div className='home-container'>
    <button className='home-button' onClick={handleClick}>Home</button>
  </div>
  );
  }