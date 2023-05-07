import styled from "styled-components";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { BsFillFilePersonFill } from "react-icons/bs";
import { useState } from "react";

const NavItem = ({ icon, title, data, toggleNavbar, activeTitle }) => {
  // const [isActive, setIsActive] = useState(false);

  const isActive = title === activeTitle;
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <Nav className="nav">
      <NavTitle className="nav-title" onClick={() => toggleNavbar(title)}>
        {isActive ? (
          <MdKeyboardArrowDown style={{ color: "rgba(0,0,0,0.4)" }} />
        ) : (
          <MdKeyboardArrowRight style={{ color: "rgba(0,0,0,0.4)" }} />
        )}
        {icon}
        <p>{title}</p>
      </NavTitle>
      {isActive && (
        <ul>
          {data.map((item) => {
            return (
              <li key={item.title}>
                <p>{item.title}</p>
              </li>
            );
          })}
        </ul>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      display: flex;
      justify-content: center;
      position: relative; // for hover
      padding: 5px 0;
      width: 100%;
      p {
        width: 50%;
        position: relative;
        left: -5px;
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
const NavTitle = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 0;
  p {
    padding: 0px 5px;
  }

  &:hover {
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }
`;
export default NavItem;
