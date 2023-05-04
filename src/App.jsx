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
    overflow-y: hidden; // scroll?

    height: 100%;
    width: 67%;
    border: 1px black solid;
  }
  aside {
    display: flex;
    &.sidebar {
      align-items: center;
      justify-content: space-between;
      flex-direction: column;

      width: 15%;
      height: 95%;
    }
    &.right-bar {
      flex-direction: column;
      align-items: center;
      width: 18%;
      height: 100%;
    }
  }
`;
export default App;
