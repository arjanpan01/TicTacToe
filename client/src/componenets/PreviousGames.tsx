import React from 'react';
import { useGames } from '../context/gamesContext';

const PreviousGames = () => {
    const { games, loading, error, deleteAllGames } = useGames();

    if (loading) {
        return (
            <div>
                Loading previous games...
            </div>
        )
    }

    if (error) {
        return (
            <div>{error}</div>
        )
    }
    const styling = "min-w-[100px] border-2"

    return (
        <div className='flex flex-col items-center'>
            <h3>Previous Games</h3>
            <table>
                <thead>
                    <tr>
                        <th className={styling}>Game</th>
                        <th className={styling}>Winner</th>
                    </tr>
                </thead>
                <tbody>
                    {games.map((game, gameIndex) => (
                        <tr key={`${gameIndex}${game.winner}`}>
                            <td className={styling}>{gameIndex}</td>
                            <td className={styling}>{game.winner}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='my-4 px-3 py-1 border rounded' onClick={deleteAllGames}>Delete All Games</button>
        </div>
    )
}
export default PreviousGames