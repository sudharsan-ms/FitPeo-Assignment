import "./index.css";
import { MdDashboard } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaCalendarCheck } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import {FiSettings} from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="sideBarContainer">
      <header className="HealthCareHeader">
        <h1>Health<span>Care</span></h1>
      </header>
      <div>
        <p className="generalTopic">General</p>
        <ul className="sideBarItems">
          <li id="DashBoardColor">
            <MdDashboard /> <p>Dashboard</p>
          </li>
          <li>
            <FaHistory /> <p>History</p>
          </li>
          <li>
            <AiOutlineCalendar /> <p>Calendar</p>
          </li>
          <li>
            <FaCalendarCheck /> <p>Appoinments</p>
          </li>
          <li>
            <MdBarChart /> <p>Statistics</p>
          </li>
        </ul>
        <p className="toolsTopic">Tools</p>
        <ul className="sideBarItemsTwo">
          <li>
            <BsChatDots />
            <p>Chat</p>
          </li>
          <li>
            <MdSupportAgent />
            <p>Support</p>
          </li>
        </ul>
      </div>
      <div className="settingsDiv">
        <FiSettings/> <p>Settings</p>
      </div>
    </div>
  );
};

export default Sidebar;
