import styled from "styled-components";

const Btn = styled.button`
  background: white;
  border: none;
  color: salmon;
  font-size: 32px;
  margin: 20px auto;
  width: 200px;
  height: 50px;
  cursor: pointer;
`;

function Button({ children }) {
  return <Btn>{children}</Btn>;
}

export default Button;
