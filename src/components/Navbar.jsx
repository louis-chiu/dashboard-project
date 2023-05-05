import styled from "styled-components";
import NavItem from "./NavItem";

const Navbar = ({ title, data }) => {
  return (
    <NavContainer className="nav-container">
      <p className="nav-category">{title}</p>

      <ul className="nav-title">
        {data.map((item) => {
          return (
            <li>
              <NavItem {...item} key={item.title} />
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
