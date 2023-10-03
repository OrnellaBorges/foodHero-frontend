import React from "react";

// import icons
import { BsArrowRightShort } from "react-icons/bs";

//import images
import mikael from "../../../../assets/mikael.jpg";

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
        </div>
    );
};

export default Activity;
