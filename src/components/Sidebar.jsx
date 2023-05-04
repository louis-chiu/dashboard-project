import Navbar from "./Navbar";
import defaultImg from "../assets/react.svg";
import styled from "styled-components";
import { IoSnowOutline } from "react-icons/io5";
import { RxDotFilled } from "react-icons/rx";

import User from "./User";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <User />

      <FavContainer className="favorites-container">
        <p className="favorites-title">Favorites</p>
        <ul className="favorites">
          <li>
            <RxDotFilled color="rgba(0, 0, 0, 0.2)" />
            <p>Overview</p>
          </li>
          <li>
            <RxDotFilled color="rgba(0, 0, 0, 0.2)" />
            <p>Projects</p>
          </li>
        </ul>
      </FavContainer>

      <NavContainer>
        <Navbar />
      </NavContainer>

      <Logo className="logo">
        <IoSnowOutline color="#95A4FC" size={25} />

        <p>
          sn<span>o</span>w
        </p>
      </Logo>
    </aside>
  );
};

const FavContainer = styled.section`
  width: 80%;
  height: 20%;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  .favorites-title {
    color: rgba(0, 0, 0, 0.4);
    padding: 5px 0;
    &::after {
      content: "Recently";
      padding-left: 35px;
      color: rgba(0, 0, 0, 0.2);
    }
  }
  .favorites {
    li {
      padding: 5px 0;

      display: flex;
      align-items: center;
      p {
        padding: 0 0 0 10px;
      }
    }
  }
`;
const NavContainer = styled.section`
  height: 70%;
  width: 80%;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 30px;

  p {
    font-size: 18px;
    font-weight: 700;
    padding: 0 0 0 5px;
    span {
      color: #95a4fc;
    }
  }
`;

export default Sidebar;
