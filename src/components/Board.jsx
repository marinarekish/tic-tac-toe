import { useState } from "react";
import styled from "styled-components";
import Square from "./Square";
import Button from "./Button";

const BoardDiv = styled.div`
  background-color: lightblue;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoardRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

function Board() {
  const initialSquares = Array(9).fill(null);

  const [squares, setSquares] = useState(initialSquares);
  const [xTurn, setXTurn] = useState(true);

  const handleClick = (index) => {
    const newSquares = [...squares];

    const winnerDeclared = Boolean(Winner(newSquares));
    const squareFilled = Boolean(newSquares[index]);

    // check if we have winner or the square is already filled - return early from the click event
    if (winnerDeclared || squareFilled) {
      return;
    }

    newSquares[index] = xTurn ? "X" : "O";
    setSquares(newSquares);
    setXTurn(!xTurn);
  };

  const handleReset = () => {
    setSquares(initialSquares);
    setXTurn(true);
  };

  const renderSquares = (index) => {
    return <Square value={squares[index]} onClickEvent={() => handleClick(index)} />;
  };

  const Winner = (squares) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let winningCombination of winningCombinations) {
      const [a, b, c] = winningCombination;

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
      return null;
    }
  };

  const winner = Winner(squares);
  const info = winner ? `Winner: ${winner}` : `now playing: ${xTurn ? "X" : "O"}`;

  return (
    <BoardDiv>
      {info}
      <BoardRow>
        {renderSquares(0)}
        {renderSquares(1)}
        {renderSquares(2)}
      </BoardRow>
      <BoardRow>
        {renderSquares(3)}
        {renderSquares(4)}
        {renderSquares(5)}
      </BoardRow>
      <BoardRow>
        {renderSquares(6)}
        {renderSquares(7)}
        {renderSquares(8)}
      </BoardRow>
      <div onClick={handleReset}>
        <Button>Play Again</Button>
      </div>
    </BoardDiv>
  );
}

export default Board;
