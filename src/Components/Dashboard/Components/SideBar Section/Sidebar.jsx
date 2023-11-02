import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getOneUser } from "../../../../api/ApiUser";
import { useParams } from "react-router-dom";

//IMPORT ICONS FROM REACT ICONS
import { GiHamburger } from "react-icons/gi";
import { MdOutlineExplore } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { BiSolidHome } from "react-icons/bi";

//import style
import "./sidebar.scss";
import "../../../../index.scss";

//import assets and images
import adminImage from "../../../../assets/users/albert4.png";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { selectUser, connectUser } from "../../../../slices/userSlice";

const Sidebar = (props) => {
  //const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const { isLogged } = user;
  const { firstName, lastName } = user.infos;
  const userId = user.infos.id;

  return (
    <>
      {isLogged && (
        <div className="sidebar ">
          <div className="sidebarHeader sidebarLogo">
            <div className="iconContainer">
              <GiHamburger className="icon sidebarIcon" />
            </div>
            <h2 className="brand">FOODIE</h2>
          </div>

          <div className="sidebarUser">
            <div className="containerImg">
              <img src={adminImage} alt="Admin image" />
            </div>
            <p>Welcom,</p>
            <p className="userName">
              {firstName} {lastName}
            </p>
          </div>

          <div className="sidebarMenu">
            <ul className=" list sideBarList flex">
              <li className="listItem flex">
                <Link to="/" className="sidebarMenu-link flex">
                  <BiSolidHome className="iconMenu" />
                  <p className="smallText">Home</p>
                </Link>
              </li>
              <li className="listItem">
                <Link to="/" className="sidebarMenu-link flex">
                  <MdOutlineExplore className="iconMenu" />
                  <p className="smallText">Explore</p>
                </Link>
              </li>
              <li className="listItem">
                <Link
                  to={`/userProfile/${userId}`}
                  className="sidebarMenu-link flex"
                >
                  <LuUser2 className="iconMenu" />
                  <p className="smallText">Mon compte</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
