import React from "react";

//import Styles
import "./Activity.scss";

import SeeAllBtn from "../../../Buttons/SeeAll/SeeAllBtn";

// import icons

//import images
import mikael from "../../../../assets/users/mikael.jpg";
import gustavo from "../../../../assets/users/gustavo.jpg";
import ronald from "../../../../assets/users/ronald.jpg";
import andrea from "../../../../assets/users/andrea.jpg";

const Activity = () => {
    const ordersList = [
        {
            id: 1,
            firstName: "Mikael",
            lastname: "Borges",
            pseudo: "Mika4ever",
            image: { mikael },
            date: "2023-10-01",
            heure: "13:45",
        },
        {
            id: 2,
            firstName: "Mikael",
            lastname: "Borges",
            pseudo: "Mika4ever",
            image: { mikael },
            date: "2023-10-01",
            heure: "13:45",
        },
        {
            id: 3,
            firstName: "Mikael",
            lastname: "Borges",
            pseudo: "Mika4ever",
            image: { mikael },
            date: "2023-10-01",
            heure: "13:45",
        },
        {
            id: 4,
            firstName: "Mikael",
            lastname: "Borges",
            pseudo: "Mika4ever",
            image: { mikael },
            date: "2023-10-01",
            heure: "13:45",
        },
        {
            id: 5,
            firstName: "Mikael",
            lastname: "Borges",
            pseudo: "Mika4ever",
            image: { mikael },
            date: "2023-10-01",
            heure: "13:45",
        },

        {
            id: 6,
            firstName: "Mikael",
            lastname: "Borges",
            pseudo: "Mika4ever",
            image: { mikael },
            date: "2023-10-01",
            heure: "13:45",
        },
        {
            id: 7,
            firstName: "Mikael",
            lastname: "Borges",
            pseudo: "Mika4ever",
            image: { mikael },
            date: "2023-10-01",
            heure: "13:45",
        },
    ];

    return (
        <div className="activitySection">
            <div className="activityHeading flex">
                <h1 className="ActivityTitle">Recent Activity</h1>
                <SeeAllBtn />
            </div>
            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={mikael} alt="customer image" />
                    <div className="customerDetails">
                        <p className="name"> Ola Mikael</p>
                        <small>Ordered a new recipe</small>
                    </div>
                    <div className="duration">2 min ago</div>
                </div>
            </div>
            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={ronald} alt="customer image" />
                    <div className="customerDetails">
                        <p className="name"> Ola Mikael</p>
                        <small>Ordered a new recipe</small>
                    </div>
                    <div className="duration">2 min ago</div>
                </div>
            </div>
            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={andrea} alt="customer image" />
                    <div className="customerDetails">
                        <p className="name"> Ola Mikael</p>
                        <small>Ordered a new recipe</small>
                    </div>
                    <div className="duration">2 min ago</div>
                </div>
            </div>
            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={gustavo} alt="customer image" />
                    <div className="customerDetails">
                        <p className="name"> Ola Mikael</p>
                        <small>Ordered a new recipe</small>
                    </div>
                    <div className="duration">2 min ago</div>
                </div>
            </div>
        </div>
    );
};

export default Activity;
