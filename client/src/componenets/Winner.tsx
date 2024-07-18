import React from 'react';
import { XorO } from '../types';

interface WinnerProps {
    winner: (XorO | "Draw" | undefined)
    resetBoard: () => void;

}

const Winner: React.FC<WinnerProps>= ({winner, resetBoard}) => {
    return (
        <div className='flex flex-col items-center gap-4'>
            <p className='text-lg font-medium'>{winner === 'Draw' ? "Draw!" : `${winner} wins!`}</p>
            <button className="px-3 py-1 border rounded"  onClick={resetBoard}>Reset Board</button>
        </div>
    )
}
export default Winner;