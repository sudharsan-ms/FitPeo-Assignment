import Sidebar from "./components/Sidebar"
import DashboardMainContent from "./components/DashboardMainContent";
import "./App.css";

const App = () => {
  return (
    <div className="MainContainer">
      <div className="ContentContainer"> 
        <Sidebar/>
        <DashboardMainContent/>
      </div>
    </div>
  );
};

export default App;
