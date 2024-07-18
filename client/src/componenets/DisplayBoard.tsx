import React from 'react';
import { XorO } from '../types';

interface DisplayBoardProps {
    board: (XorO | undefined)[][];
    handleClick: (rowIndex: number, columnIndex: number) => void;
}

const DisplayBoard: React.FC<DisplayBoardProps> = ({ board, handleClick }) => {
    return (
        <div className='flex flex-col gap-1'>
            {board.map((row, rowIndex) => 
            <div className='flex gap-1' key={`row${rowIndex}`}>
                {row.map((column, columnIndex) => 
                <div 
                    className='border-2 border-gray-900 w-10 h-10 cursor-pointer items-center justify-center text-2xl font-bold flex'
                    onClick={() => handleClick(rowIndex, columnIndex)}
                    key={`col${columnIndex}`}
                >
                {column}
                </div>)}
            </div>)}
        </div>
    )
}
export default DisplayBoard;