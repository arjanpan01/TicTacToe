import { XorO } from "../types";
import { useState } from "react";
import { useGames } from "../context/gamesContext";

const initBoard = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
]

export const useTicTacToe = () => {
    const {addGame} = useGames();

    const [board, setBoard] = useState<(XorO | undefined)[][]>([
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
    ])
    const [player, setPlayer] = useState<XorO | undefined>(undefined);
    const [winner, setWinner] = useState<XorO | "Draw" | undefined>(undefined);
    
    const chooseStartingPlayer = (player: XorO) => {
        setPlayer(player);
    }

    const resetBoard = () => {
        setBoard([
            [undefined, undefined, undefined],
            [undefined, undefined, undefined],
            [undefined, undefined, undefined]
        ]);
        setPlayer(undefined);
        setWinner(undefined);
    }

    const handleClick = (rowIndex: number, columnIndex: number) => {
        if (winner) { // if there is a winner return
            return;
        }
        const newBoard = [...board]; // copy board
        if (board[rowIndex][columnIndex] === undefined) { // update board
            newBoard[rowIndex][columnIndex] = player;
            setBoard(newBoard);
            setPlayer(player === "X" ? "O" : "X"); // change player
        }
        const XorOWins = checkWinner(newBoard); // check winner or draw
        if (XorOWins) {
            setWinner(XorOWins)
            addGame(XorOWins)
        } else if (isBoardFull(newBoard)) {
            setWinner("Draw");
            addGame("Draw")
        }
    }

    const checkWinner = (board: (XorO | undefined)[][]): (XorO | undefined) => {
        //only need to check 4 possibiies, row, column, diag, anti-diag (not the best solution as if the baord was expanded would have to rewrite)
        for (let i = 0; i < 3; i++) {
            // check row
            if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
                return board[i][0];
            }
            // check column
            if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
                return board[0][i];
            }
        }
        // check main diag
        if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            return board[0][0];
        }

        // check anti-diag
        if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
            return board[0][2];
        }
        return undefined;
    }

    const isBoardFull = (board: (XorO | undefined)[][]): boolean => {
        return board.every(row => row.every(cell => cell !== undefined));
    }
    return { board, player, handleClick, winner, resetBoard, chooseStartingPlayer}
}   
