import styled from "styled-components";
import { BsBug } from "react-icons/bs";

const Notification = () => {
  return (
    <Wrapper>
      <div className="icon-container">
        <BsBug size={15} />
      </div>
      <div className="notification">
        <p className="message">You have a bug that needs t...</p>
        <p className="timestamp">Just now</p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 8px;
    background: #e3f5ff;
  }
  .notification {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    .message {
    }
    .timestamp {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.4);
    }
  }
`;
export default Notification;
