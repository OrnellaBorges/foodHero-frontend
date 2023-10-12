import React from "react";
import { Link } from "react-router-dom";

import "./account.scss";

import adminImage from "../../assets/users/albert4.png";

//ICI C'EST LA PAGE OU L'utilisateur peut voir son compte et modifier ses données personnels

// il faut requireDataAuth pour consulter et modifier

const Account = () => {
    return (
        <>
            <section className="accountContainer">
                {/* <h1>DASHBOARD PAGE</h1> */}

                <div className="sidebarProfil">
                    <div className="profilHeader">
                        <h1 className="titleAccount">My account</h1>
                    </div>
                    <div className="userContainer">
                        <div className="userImgContainer">
                            <img src={adminImage} alt="user image" />
                        </div>
                        <div className="userName">
                            <h2 className="name">Albert</h2>
                            <h2 className="name">Einstein</h2>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="body">
                        <ul className="userInfo">
                            <li className="infoItem">
                                <h3>email:</h3>
                                <p>e=mc2@lycos.fr</p>
                            </li>
                            <li className="infoItem">
                                <h3>address:</h3>
                                <p>53 rue de la Relativité </p>
                            </li>

                            <li className="infoItem">
                                <h3>City</h3>
                                <p>Montcul</p>
                            </li>
                            <li className="infoItem">
                                <h3>Zip</h3>
                                <p>62468</p>
                            </li>
                            <li className="infoItem">
                                <h3>Tel</h3>
                                <p>0689547698</p>
                            </li>
                        </ul>
                    </div>
                    <Link to="/EditAccount" /* className="accountFooter" */>
                        <button className="editBtn">Edit</button>
                    </Link>
                    <Link to="/UserProfile" /* className="accountFooter" */>
                        <button className="editBtn">UserProfile</button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Account;
