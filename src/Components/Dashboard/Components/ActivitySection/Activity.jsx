import React from "react";

//import Styles
import "./Activity.scss";

// import icons
import { BsArrowRightShort } from "react-icons/bs";

//import images
import mikael from "../../../../assets/mikael.jpg";
import gustavo from "../../../../assets/gustavo.jpg";
import ronald from "../../../../assets/ronald.jpg";
import andrea from "../../../../assets/andrea.jpg";

const Activity = () => {
    return (
        <div className="activitySection">
            <div className="heading flex">
                <h1>Recent Activity</h1>
                <button className="btn flex">
                    See All
                    <BsArrowRightShort className="icon" />
                </button>
            </div>
            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={mikael} alt="customer image" />
                    <div className="customerDetails">
                        <span className="name"> Ola Mikael</span>
                        <small>Ordered a new recipe</small>
                    </div>
                    <div className="duration">2 min ago</div>
                </div>
            </div>
            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={ronald} alt="customer image" />
                    <div className="customerDetails">
                        <span className="name"> Ola Mikael</span>
                        <small>Ordered a new recipe</small>
                    </div>
                    <div className="duration">2 min ago</div>
                </div>
            </div>
            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={andrea} alt="customer image" />
                    <div className="customerDetails">
                        <span className="name"> Ola Mikael</span>
                        <small>Ordered a new recipe</small>
                    </div>
                    <div className="duration">2 min ago</div>
                </div>
            </div>
            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={gustavo} alt="customer image" />
                    <div className="customerDetails">
                        <span className="name"> Ola Mikael</span>
                        <small>Ordered a new recipe</small>
                    </div>
                    <div className="duration">2 min ago</div>
                </div>
            </div>
        </div>
    );
};

export default Activity;
