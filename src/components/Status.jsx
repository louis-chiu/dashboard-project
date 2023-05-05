import styled from "styled-components";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";
import { useState } from "react";
const Status = ({ title, data, date }) => {
  const [isRise, setIsRise] = useState(true);
  // const today = new Date().toLocaleDateString("en-us");
  // console.log(today);

  return (
    <Wrapper className="status">
      <p className="status-title">{title}</p>
      <div className="status-data-container">
        <div className="status-data">
          {data > 10000
            ? data / 1000 + "k"
            : Number(data).toLocaleString("en-US")}
        </div>
        <div className="status-change-rate-container">
          <p className="status-change-rate">+11.01%</p>
          {isRise ? <AiOutlineRise /> : <AiOutlineFall />}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p.status-title {
    align-self: flex-start;
    font-weight: bold;
    margin: 15px 20px;
  }

  div.status-data-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 25px 15px 20px;
    height: 30%;
    div.status-data {
      font-size: 24px;
      font-weight: bold;
    }
    div.status-change-rate-container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p.status-change-rate {
        font-size: 12px;
        padding-right: 5px;
      }
    }
  }
`;
export default Status;
