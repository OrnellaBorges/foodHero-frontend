import React from "react";
//import Sidebar from "../SideBar Section/Sidebar";
import Body from "../BodySection/Body";

//IMPORT STYLE
import "./dashboard.scss";
import "../../../../index.scss";
import Sidebar from "../SideBar Section/Sidebar";
import Footer from "../../../Footer/Footer";

const Dashboard = () => {
    /* useEffect(()=>{
        getAllAds()
        .then((res)=>{
            if(res.status === 200) {
                setOrders(res.result)
            }
        })
        .catch(err=>console.log(err))
    }, []) */
    return (
        <>
            <div className="dashboard">
                <div className="dashboardContainer flex">
                    <Sidebar />
                    <Body />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Dashboard;
