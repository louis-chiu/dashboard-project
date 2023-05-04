import styled from "styled-components";

import FunctionBar from "./FunctionBar";
import Breadcrumb from "./Breadcrumb";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

const Dashboards = () => {
  return (
    <Wrapper className="dashboard">
      <header>
        <Breadcrumb />
        <FunctionBar />
      </header>

      <main>
        <div className="date-picker">
          <button>Today</button>
          <MdKeyboardArrowDown />
        </div>
        <section className="status-container">
          <div className="status"></div>
          <div className="status"></div>
          <div className="status"></div>
          <div className="status"></div>
        </section>
        <section className="statistic-row-1">
          <div className="line-chart"></div>
          <div className="bar-chart"></div>
        </section>
        <section className="statistic-row-2">
          <div className="bar-chart"></div>
          <div className="pie-chart"></div>
        </section>
        <section className="statistic-row-3">
          <div className="line-chart"></div>
        </section>
      </main>

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
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px rgba(0, 0, 0, 0.1) solid;
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
    flex: 0 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    div.date-picker {
      height: 50px;
      border-radius: 16px;
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: flex-start;
      margin: 0 60px;
      button {
        font-weight: bold;
      }
    }
    section.status-container {
      height: 120px;
      width: 90%;
      flex: 0 0 auto;

      display: flex;
      justify-content: space-between;
      div.status {
        border-radius: 16px;
        &:nth-child(odd) {
          width: 20%;
          height: 100%;
          background-color: #e3f5ff;
        }
        &:nth-child(even) {
          width: 20%;
          height: 100%;
          background-color: #e5ecf6;
        }
      }
    }
    section.statistic-row-1 {
      height: 300px;
      width: 90%;
      flex: 0 0 auto;
      margin: 20px 0;
      display: flex;
      justify-content: space-between;
      div.line-chart {
        width: 75%;
        height: 100%;
        border-radius: 16px;
        background-color: #f7f9fb;
      }
      div.bar-chart {
        width: 20%;
        height: 100%;
        border-radius: 16px;
        background-color: #f7f9fb;
      }
    }
    section.statistic-row-2 {
      margin: 20px 0;
      height: 300px;
      width: 90%;
      flex: 0 0 auto;
      display: flex;
      justify-content: space-between;
      div.bar-chart {
        width: 47.5%;
        height: 100%;
        border-radius: 16px;
        background-color: #f7f9fb;
      }
      div.pie-chart {
        width: 47.5%;
        height: 100%;
        border-radius: 16px;
        background-color: #f7f9fb;
      }
    }
    section.statistic-row-3 {
      margin: 20px 0;
      height: 300px;
      width: 90%;
      flex: 0 0 auto;
      div.line-chart {
        width: 100%;
        height: 100%;
        border-radius: 16px;
        background-color: #f7f9fb;
      }
    }
  }

  footer {
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
