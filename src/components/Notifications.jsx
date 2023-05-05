import styled from "styled-components";
import User from "./User";
import Notification from "./Notification";

const StatusList = ({ title, data }) => {
  return (
    <Wrapper>
      <p className="status-category">{title}</p>
      <section className="data">
        <ul>
          {data.map((item) => {
            return (
              <li>
                {title === "Contacts" ? (
                  <User {...item} key={item.name} />
                ) : (
                  <Notification {...item} key={item.timestamp /*temp*/} />
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </Wrapper>
  );
};
// 27 char + ...
const Wrapper = styled.section`
  padding: 0 0 0 5px;
  width: 90%;
  margin: 20px 0 0 0;

  p.status-category {
    font-weight: 600;
    color: rgba(0, 0, 0);
    padding: 5px 0 5px 10px;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      padding: 0 0 0 10px;

      width: 100%;
      &:hover {
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.05);
        cursor: pointer;
      }
      div {
        &.notification-container {
          margin: 5px 0;
        }
        &.user-container {
          margin: 2px 0;
        }
        img {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;
export default StatusList;
