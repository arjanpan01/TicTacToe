import React from 'react';

interface ChoosePlayerProps {
    chooseStartingPlayer: (player: "X" | "O") => void;
}

const ChoosePlayer: React.FC<ChoosePlayerProps> = ({ chooseStartingPlayer }) => {
    return (
        <div className='flex flex-col items-center gap-3'>
            Choose starting player:
            <div className='flex gap-8 text-xl'>
            <button className="px-3 py-1 border rounded" onClick={() => chooseStartingPlayer("X")}>X</button>
            <button className="px-3 py-1 border rounded" onClick={() => chooseStartingPlayer("O")}>O</button>
            </div>
        </div>
    )
}
export default ChoosePlayer;