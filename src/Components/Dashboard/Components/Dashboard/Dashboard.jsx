import React from "react";
import Body from "../BodySection/Body";

//IMPORT STYLE
import "./dashboard.scss";
import "../../../../index.scss";
import Sidebar from "../SideBar Section/Sidebar";

const Dashboard = (props) => {
  const user = props.user;

  return (
    <>
      <div className="dashboard">
        <div className="dashboardContainer">
          <Sidebar />
          <Body userId={props.userId} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
