import React from 'react'
import { useTicTacToe } from './hooks/useTicTacToe'
import ChoosePlayer from './componenets/ChoosePlayer'
import DisplayBoard from './componenets/DisplayBoard'
import Winner from './componenets/Winner'
import PreviousGames from './componenets/PreviousGames'

export const Main = () => {
  const {board, player, handleClick, winner, resetBoard, chooseStartingPlayer} = useTicTacToe();
  
  return (
    <div className='flex flex-col mt-10 items-center gap-10'>
      <div className='font-bold text-2xl'>Tic Tac Toe</div>
      {player === undefined && (
        <ChoosePlayer chooseStartingPlayer={chooseStartingPlayer}/>
      )}
      
      <DisplayBoard board={board} handleClick={handleClick}/>

      {winner && (
        <Winner winner={winner} resetBoard={resetBoard}/>
      )}

      <PreviousGames/>
    </div>
  )
}
