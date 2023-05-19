import React, { useState } from "react";
import { calculateWinner2 } from "../../helpers";
import Board from "./Board";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner2(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };
  return (
    <div>
      <Board board={board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">{`winner is ${winner}`}</div>}
      <button className="game-reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Game;
