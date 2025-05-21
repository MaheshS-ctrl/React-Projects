
import StartGame from './Components/StartGame'
import { useState } from 'react';
import GamePlay from './Components/GamePlay';
import './App.css'


function App() {

  const[isGameStarted,setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }

  return (
   <div>
    {
      isGameStarted ? <GamePlay/> : <StartGame toggle = {toggleGamePlay} />
    }
    
   </div>
  )
}

export default App
