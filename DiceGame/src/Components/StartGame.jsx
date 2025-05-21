import React from 'react'

const StartGame = ({toggle}) => {
  return (
    <div className='container'>

      <div className='diceimg1'>
        <img src="./images/dices.png" alt="" />
      </div>

      <div className='start'>
        <h1>DICE GAME</h1>
        <button onClick={toggle} id='playbutton'>Play Now</button>
      </div>
    </div>
  )
}

export default StartGame

