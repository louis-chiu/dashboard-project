import styled from "styled-components";
import NavItem from "./NavItem";
import { useState } from "react";

const Navbar = ({ title, data }) => {
  const [activeTitle, setActiveTitle] = useState(null);

  const toggleNavbar = (title) => {
    const newActiveTitle = title === activeTitle ? null : title;
    setActiveTitle(newActiveTitle);
    console.log(newActiveTitle);
  };

  return (
    <NavContainer className="nav-container">
      <p className="nav-category">{title}</p>

      <ul className="nav-title">
        {data.map((item) => {
          return (
            <li key={item.title}>
              <NavItem
                {...item}
                toggleNavbar={toggleNavbar}
                activeTitle={activeTitle}
              />
            </li>
          );
        })}
      </ul>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  p.nav-category {
    color: rgba(0, 0, 0, 0.4);
  }
`;

export default Navbar;
