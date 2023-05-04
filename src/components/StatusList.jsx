import styled from "styled-components";
import User from "./User";
import Notification from "./Notification";

const StatusList = () => {
  return (
    <Wrapper>
      <p className="status-category">Notifications</p>
      <section className="data">
        <ul>
          <li>
            <Notification />
          </li>
          <li>
            <Notification />
          </li>
          <li>
            <Notification />
          </li>
        </ul>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0 0 0 15px;
  width: 90%;
  margin: 15px 0 0 0;

  p.status-category {
    font-weight: 600;
    color: rgba(0, 0, 0);
    padding: 5px 0;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      width: 100%;
      margin: 5px 0;
    }
  }
`;
export default StatusList;
