import styled from "styled-components";
import "./App.css";
import Dashboards from "./components/Dashboards";
import RightBar from "./components/RightBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Container>
      <Sidebar />
      <Dashboards />
      <RightBar />
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  section.dashboard {
    display: flex;
    flex-direction: column;
    overflow-y: scroll; // scroll?

    height: 100%;
    width: 67%;
  }
  aside {
    display: flex;
    &.sidebar {
      align-items: center;
      justify-content: space-between;
      flex-direction: column;

      width: 15%;
      height: 95%;
      border-right: 1px rgba(0, 0, 0, 0.1) solid;
    }
    &.right-bar {
      flex-direction: column;
      align-items: center;
      width: 18%;
      height: 100%;
      border-left: 1px rgba(0, 0, 0, 0.1) solid;
    }
  }
`;
export default App;
