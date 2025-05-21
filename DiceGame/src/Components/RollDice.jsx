import React, { useState } from 'react'
import GamePlay from './GamePlay';
import Rules from './Rules';
import { FcPrevious } from 'react-icons/fc';

const RollDice = ({currentDice,rolldice,resetScore,showRules,setShowRule}) => {


    return (
        <div className='dice'>
            <img onClick={rolldice} src={`./images/dice_${currentDice}.png`} alt="" />
            <p>Click On Dice to Roll</p>
            <button id='reset' onClick={resetScore}>Reset Score</button>
            <button id='rules' onClick={() => setShowRule((prev) => !prev)}>  {showRules? "Hide" : "Show"} Rules</button>
            {showRules && <Rules/>}
        </div>

    )
}

export default RollDice
