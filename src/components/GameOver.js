import React from 'react'

const GameOver = ({retry}) => {
  return (
    <div>
    <h1>Game</h1>
    <button onClick={retry}>Resetar jogo</button>
</div>
  )
}

export default GameOver