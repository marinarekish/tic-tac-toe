import styled from "styled-components";

const StatisticDiv = styled.div`
  background-color: white;
  color: #222;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

function Statistic() {
  return (
    <StatisticDiv>
      <h5>Last games</h5>
    </StatisticDiv>
  );
}

export default Statistic;
