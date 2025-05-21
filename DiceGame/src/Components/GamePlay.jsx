import React, { useState } from 'react'
import RollDice from './RollDice';

const GamePlay = () => {

    const arr = [1, 2, 3, 4, 5, 6]

    const [error, setError] = useState("");
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [showRules,setShowRule] = useState(false);

    const resetScore = () => {
        setScore(0);
    }

    function getRandomInt(min, max) {


        return Math.floor(Math.random() * (max - min) + min);

    }

    const ErrorHandler = (value) => {
        setSelectedNumber(value);
        setError("");
    }

    const rolldice = () => {

        if (!selectedNumber) {
            setError("You have not selected any number");
            return;
        }




        const randomNumber = getRandomInt(1, 7);
        setCurrentDice(randomNumber);

        if (randomNumber == selectedNumber)
            setScore((prev) => prev + selectedNumber)
        else
            setScore((prev) => prev - 2)

        setSelectedNumber(undefined);
    }

    return (

        <div>
            <div className="containerGameplay">

                <div className='totalScore'>
                    <h1>{score}</h1>
                    <p>Total Score</p>
                </div>


                <div className='selectNumber'>

                    <div>
                        {
                            arr.map((value, i) => (
                                <button className={value === selectedNumber ? 'selected' : ''} key={i} onClick={() => ErrorHandler(value)}> {value} </button>
                            ))
                        }
                    </div>

                    <p id='error'>{error}</p>
                    <div className='selectedNumber'>
                        <p>Select Number</p> <br /> <br />
                        <p>Selected Number : {selectedNumber}</p>
                    </div>

                </div>
            </div>
            <RollDice currentDice={currentDice} rolldice={rolldice} resetScore={resetScore}showRules={showRules} setShowRule={setShowRule}/>
        </div>

    )
}

export default GamePlay
