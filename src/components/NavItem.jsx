import styled from "styled-components";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { BsFillFilePersonFill } from "react-icons/bs";
import { useState } from "react";

const NavItem = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Nav className="nav">
      <NavTitle className="nav-title">
        {isActive ? (
          <MdKeyboardArrowDown style={{ color: "rgba(0,0,0,0.2)" }} />
        ) : (
          <MdKeyboardArrowRight style={{ color: "rgba(0,0,0,0.2)" }} />
        )}
        <BsFillFilePersonFill size={15} style={{ margin: "0 0 0 3px" }} />
        <p>User Profile</p>
      </NavTitle>

      <ul>
        <li>
          <p>Overview</p>
        </li>
        <li>
          <p>Products</p>
        </li>
        <li>
          <p>Companies</p>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 0;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      display: flex;
      justify-content: center;
      position: relative;
      text-align: start;
      padding: 5px 0;
      width: 100%;
      p {
        width: 50%;
        text-align: start;
      }

      // hover
      &::before {
        transition: 300ms;
        height: 80%;
        width: 3px;
        content: "";
        border-radius: 2px;
        position: absolute;
        background-color: #1c1c1c;

        top: 50%;
        transform: translateY(-50%);
        left: 0;
        opacity: 0;
      }
      &:hover {
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.05);
        cursor: pointer;
        &::before {
          opacity: 1;
        }
      }
    }
  }
`;
const NavTitle = styled.div`
  display: flex;
  align-items: center;
  p {
    padding: 5px 5px;
  }

  &:hover {
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }
`;
export default NavItem;
