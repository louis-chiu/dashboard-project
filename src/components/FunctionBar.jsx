import { IoMdNotifications } from "react-icons/io";
import { MdHistory } from "react-icons/md";
import {
  BsFillSunFill,
  BsSearch,
  BsLayoutSidebarInset,
  BsLayoutSidebarInsetReverse,
} from "react-icons/bs";

const FunctionBar = () => {
  return (
    <section className="function-bar">
      <div className="search">
        <BsSearch
          color="rgba(0,0,0,.2)"
          style={{ position: "relative", left: "23px", top: "3px" }}
        />
        <input type="text" placeholder="Search" />
      </div>
      <div className="function-buttons">
        <a href="">
          <BsFillSunFill color="rgba(0,0,0,.6)" size={20} />
        </a>
        <a href="">
          <MdHistory color="rgba(0,0,0,.6)" size={20} />
        </a>
        <a href="">
          <IoMdNotifications color="rgba(0,0,0,.6)" size={20} />
        </a>
        <a href="">
          <BsLayoutSidebarInsetReverse color="rgba(0,0,0,.6)" size={20} />
        </a>
      </div>
    </section>
  );
};
export default FunctionBar;
