import styled from "styled-components";
import Notifications from "./Notifications";
import { rightBarItems } from "../data";

const RightBar = () => {
  return (
    <aside className="right-bar">
      {rightBarItems.map((item) => {
        return <Notifications {...item} key={item.title} />;
      })}
    </aside>
  );
};

export default RightBar;
