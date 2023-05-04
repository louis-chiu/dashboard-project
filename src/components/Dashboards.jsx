import styled from "styled-components";

import FunctionBar from "./FunctionBar";
import Breadcrumb from "./Breadcrumb";

const Dashboards = () => {
  return (
    <Wrapper className="dashboard">
      <header>
        <Breadcrumb />
        <FunctionBar />
      </header>

      <main></main>

      <footer>
        <p className="copyright">&copy; 2023 snow</p>

        <div className="container">
          <a href="">
            <p>About</p>
          </a>
          <a href="">
            <p>Support</p>
          </a>
          <a href="">
            <p>Contact Us</p>
          </a>
        </div>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  header {
    height: 9vh;
    width: 100%;
    border: 1px black solid;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    section.breadcrumb {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 0 0 0 20px;
      width: 30%;
      .function-buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 20%;
      }
      div.project-name {
        position: relative;
        bottom: 3px;
        width: 70%;
      }
    }

    section.function-bar {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 40%;
      margin: 0 10px 0 0;
      .search {
        width: 65%;

        input {
          border-radius: 8px;
          background-color: rgba(0, 0, 0, 0.05);
          height: 30px;
          width: 85%;
          &::placeholder {
            position: relative;
            left: 30px;
          }
        }
      }
      .function-buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-right: 20px;
        width: 35%;
      }
    }
  }

  main {
    border: 1px black solid;
    height: 84vh;
    flex: 0 0 auto;
    width: 100%;
  }

  footer {
    border: 1px black solid;
    flex: 0 0 auto;
    height: 7vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p.copyright {
      margin: 0 25px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.4);
    }
    div.container {
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin: 0 25px;
      p {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }
`;
export default Dashboards;
