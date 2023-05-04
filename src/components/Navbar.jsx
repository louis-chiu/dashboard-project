import styled from "styled-components";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <NavContainer className="nav-container">
      <p className="nav-category">Dashboards</p>

      <ul className="nav-title">
        <li>
          <NavItem />
        </li>
        <li>
          <NavItem />
        </li>
        <li>
          <NavItem />
        </li>
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
