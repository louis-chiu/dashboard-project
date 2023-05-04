import styled from "styled-components";
import StatusList from "./StatusList";

const RightBar = () => {
  return (
    <aside className="right-bar">
      <StatusList />
      <StatusList />
      <StatusList />
    </aside>
  );
};

const Wrapper = styled.aside`
`;
export default RightBar;
