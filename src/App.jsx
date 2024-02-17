import styled from "styled-components";
import Board from "./components/Board";

const GameBoard = styled.div`
  background-color: salmon;
  margin: 10;
  padding: 20;
  display: flex;
  height: 100vh;

  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <GameBoard>
      <h1>Tic-tac-toe</h1>
      <Board />
    </GameBoard>
  );
}

export default App;
