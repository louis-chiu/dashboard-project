import avatar from "../assets/cat.jpg";
import styled from "styled-components";

const User = () => {
  return (
    <UserContainer className="user">
      <img src={avatar} alt="avatar" />
      <p>User Name</p>
    </UserContainer>
  );
};
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  height: 35px;
  img {
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
  p {
    width: 80%;
    padding: 0 0 0 5px;
  }
`;
export default User;
