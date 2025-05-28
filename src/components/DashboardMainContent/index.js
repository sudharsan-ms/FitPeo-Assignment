import SearchHeader from "../SearchHeader";
import EachOrganDetail from "../EachOrganDetail";
import { ChartDatas, days, OrganDetails } from "../../data/healthData";

import { FaArrowRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { RiArrowLeftFill } from "react-icons/ri";
import { RiArrowRightFill } from "react-icons/ri";
import { FaTooth } from "react-icons/fa";

import "./index.css";

const DashboardMainContent = () => {
  return (
    <div className="DashContainer">
      <div className="DashMainContentContainer">
        <SearchHeader />
        <div className="DashAndWeekContainer">
          <h1>Dashboard</h1>
          <div className="thisWeekContainer">
            <p>This Week</p>
            <FaAngleDown />
          </div>
        </div>
        <div className="OrgansContainer">
          <div className="AnatomyContainer">
            <img
              src="https://img.freepik.com/free-photo/human-body-frontal_1048-5345.jpg"
              alt="Human-Anatomy"
              className="AnatomyImg"
            />

            <div className="label heart-label">
              <span>💚</span>Healthly Heart
            </div>
            <div className="label leg-label">
              <span>🦵</span>Healthly Leg
            </div>
          </div>

          <ul className="OrgansListContainer">
            {OrganDetails.map((each) => (
              <li>
                <EachOrganDetail key={each.id} detail={each} />
              </li>
            ))}
          </ul>
        </div>
        <div className="DetailsContainer">
          <p>Details</p>
          <FaArrowRight />
        </div>
        <div className="ActivityFeed">
          <div className="ActivityHeader">
            <h1>Activity</h1>
            <span>3 appointments on this week</span>
          </div>
          <div className="chart">
            {ChartDatas.map((bars, i) => (
              <div className="DayCol" key={i}>
                <div className="bars">
                  {bars.map((height, j) => (
                    <div
                      key={j}
                      className={`bar bar-${j}`}
                      style={{ height: `${height}px` }}
                    ></div>
                  ))}
                </div>
                <span className="day-label">{days[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="CalendarScheduleContainer">
        <div className="UserContainer">
          <div className="profileImg">👨‍🦱</div>
          <div className="AddBtn">
            <FaPlus />
          </div>
        </div>
        <div className="MonthContainer">
          <h1>October 2021</h1>
          <div className="RightAndLeftContainer">
            <RiArrowLeftFill size={20} />
            <RiArrowRightFill size={20} />
          </div>
        </div>

        <div className="CalenderContainer">
          <div className="EachDate">
            <h1 className="Day">Mon</h1>
            <h1 className="Date">25</h1>
            <p className="Time">10.00</p>
            <p className="Time">11.00</p>
            <p className="Time">12.00</p>
          </div>
          <div className="EachDate" style={{ backgroundColor: "#f4f7f4" }}>
            <h1 className="Day">Tues</h1>
            <h1 className="Date">26</h1>
            <p className="Time">08.00</p>
            <p
              className="Time"
              style={{
                backgroundColor: "#3d3fbb",
                borderRadius: "5px",
                color: "white",
                padding: "3px",
              }}
            >
              09.00
            </p>
            <p className="Time">10.00</p>
          </div>
          <div className="EachDate">
            {" "}
            <h1 className="Day">Wed</h1>
            <h1 className="Date">27</h1>
            <p className="Time">12.00</p>
            <p className="Time">-</p>
            <p className="Time">13.00</p>
          </div>
          <div className="EachDate">
            <h1 className="Day">Thurs</h1>
            <h1 className="Date">28</h1>
            <p className="Time">10.00</p>
            <p
              className="Time"
              style={{
                backgroundColor: "#aab2c8",
                borderRadius: "5px",
                color: "white",
                padding: "3px",
              }}
            >
              11.00
            </p>
            <p className="Time">-</p>
          </div>
          <div className="EachDate">
            <h1 className="Day">Fri</h1>
            <h1 className="Date">29</h1>
            <p className="Time">-</p>
            <p className="Time">14.00</p>
            <p className="Time">16.00</p>
          </div>

          <div className="EachDate">
            <h1 className="Day">Sat</h1>
            <h1 className="Date">30</h1>
            <p
              className="Time"
              style={{
                backgroundColor: "#aab2c8",
                borderRadius: "5px",
                color: "white",
                padding: "3px",
              }}
            >
              12.00
            </p>
            <p className="Time">14.00</p>
            <p className="Time">15.00</p>
          </div>
          <div className="EachDateUnique ">
            <h1 className="uniqueDay">Sun</h1>
            <h1 className="uniqueDate">31</h1>
            <p
              style={{
                backgroundColor: "#aab2c8",
                borderRadius: "5px",
                color: "white",
                padding: "3px",
              }}
            >
              09.00
            </p>
            <p>10.00</p>
            <p>11.00</p>
          </div>
        </div>

        <div className="Appoinments">
          <div className="DentistContainer">
            <div className="DentistHeader">
              <p>Dentist</p>
              <FaTooth />
            </div>
            <p className="DetailPara">09:00-11:00</p>
            <p className="DetailPara">Dr. Cameron Williamson</p>
          </div>
          <div className="PhysioContainer">
            <div className="PhysioHeader">
              <p>Physiotherapy Appoinment</p>
              <span>💪</span>
            </div>
            <p className="DetailPara">11:00-12:00</p>
            <p className="DetailPara">Dr. Kevin Djones</p>
          </div>
        </div>
        <div className="UpcomingScheduleContainer">
          <h1>The Upcoming Schedule</h1>
          <p className="OnDay">On Thursday</p>
          <div className="ThursdayContainer">
            <div className="HealthCheckupContainer">
               <div className="HealthCheckHeader">
                <p>Health checkup complete</p> <span>💉</span>
               </div>
               <p>11:00 AM</p>
            </div>
            <div className="EyeContainer">
              <div className="EyeHeader">
                <p>Ophthalmologist</p><span>👁️</span>
              </div>
              <p>14:00 PM</p>
            </div>
          </div>
          <p className="OnDay">On Saturday</p>
          <div className="SaturdayContainer">
            <div className="HeartContainer">
                <div className="HeartHeader">
                  <p>Cardiologist</p> <span>❤️</span>
                </div>
                <p>12:00 AM</p>
            </div>
            <div className="NeuroContainer">
              <div className="NeuroHeader">
                <p>Neurologist</p><span>👨‍⚕️</span>
              </div>
              <p>16:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
