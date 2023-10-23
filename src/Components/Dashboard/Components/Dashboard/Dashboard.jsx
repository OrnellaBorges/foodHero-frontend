import React from "react";
//import Sidebar from "../SideBar Section/Sidebar";
import Body from "../BodySection/Body";

//IMPORT STYLE
import "./dashboard.scss";
import "../../../../index.scss";
import Sidebar from "../SideBar Section/Sidebar";
import Footer from "../../../Footer/Footer";

const Dashboard = (props) => {
    const user = props.user;
    console.log("user", user);
    return (
        <>
            <div className="dashboard">
                <div className="dashboardContainer flex">
                    <Sidebar
                        isLogged={props.isLogged}
                        user={props.user}
                        userId={props.userId}
                        firstName={props.firstName}
                        lastName={props.lastName}
                    />
                    <Body userId={props.userId} />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Dashboard;
