import {
  BsFillSunFill,
  BsSearch,
  BsLayoutSidebarInset,
  BsLayoutSidebarInsetReverse,
} from "react-icons/bs";

import { AiFillStar } from "react-icons/ai";

const Breadcrumb = () => {
  return (
    <section className="breadcrumb">
      <div className="function-buttons">
        <a href="">
          <BsLayoutSidebarInset color="rgba(0,0,0,.6)" size={20} />
        </a>
        <a href="">
          <AiFillStar color="rgba(0,0,0,.6)" size={20} />
        </a>
      </div>
      <div className="project-name">Dashboard / Default</div>
    </section>
  );
};
export default Breadcrumb;
