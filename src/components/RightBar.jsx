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

export default RightBar;
