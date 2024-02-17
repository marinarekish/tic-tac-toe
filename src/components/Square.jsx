import styled from "styled-components";

const SquareBtn = styled.button`
  background-color: gray;
  color: white;
  border: 1px solid #000;
  margin: 10px;
  padding: 0px;
  font-size: 84px;
  text-align: center;
  width: 100px;
  height: 100px;
  cursor: pointer;
  &:focus {
    background-color: #222;
    outline: none;
  }
`;

function Square(props) {
  return <SquareBtn onClick={props.onClickEvent}>{props.value}</SquareBtn>;
}

export default Square;
