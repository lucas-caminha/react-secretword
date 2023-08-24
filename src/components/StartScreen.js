import React from 'react';
import "./StartScreen.css";

const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
        <h1>Palavra misteriosa</h1>
        <p>Clique para jogar!</p>
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen