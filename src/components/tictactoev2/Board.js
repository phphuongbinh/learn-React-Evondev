import React from "react";
import Cell from "./Cell";
import "./GameStyles.css";

const Board = ({ board, onClick }) => {
  return (
    <div className="game-board">
      {board.map((item, index) => {
        return (
          <Cell
            key={index}
            value={item}
            className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
            onClick={() => onClick(index)}
          />
        );
      })}
    </div>
  );
};

export default Board;
