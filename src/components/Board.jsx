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

  const handleClick = (i) => {
    const newSquares = [...squares];
    const winnerDeclared = Boolean(calculateWinner(newSquares));
    const squareAlreadyFilled = Boolean(newSquares[i]);
    if (winnerDeclared || squareAlreadyFilled) return;
    newSquares[i] = xTurn ? "X" : "O";
    setSquares(newSquares);
    setXTurn(!xTurn);
  };

  const handleReset = () => {
    setSquares(initialSquares);
    setXTurn(true);
  };

  const renderSquares = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xTurn ? "X" : "O"}`;

  return (
    <BoardDiv>
      {status}
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

// function-helper
function calculateWinner(squares) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let winningLine of winningLines) {
    const [a, b, c] = winningLine;

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
