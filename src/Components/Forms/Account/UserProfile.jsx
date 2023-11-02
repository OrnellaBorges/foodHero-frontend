import React, { useState, useEffect } from "react";
import { Link, useNavigate, Navigate, useParams } from "react-router-dom";
import { getOneUser } from "../../../api/ApiUser";

//import components
import Button from "../../Buttons/Button";

import "./userProfile.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, connectUser } from "../../../slices/userSlice";
import adminImageDefault from "../../../assets/users/albert4.png";
import { logoutUser } from "../../../slices/userSlice";

const UserProfile = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cookerId } = useParams();
  const [cooker, setCooker] = useState({});

  const user = useSelector(selectUser);

  const userId = String(user.infos.id);

  const onLogout = () => {
    /* props.logoutUser();
        localStorage.removeItem("fh-token");
        navigate("/"); */

    window.localStorage.removeItem("fh-token");
    dispatch(logoutUser());
    navigate("/");
  };

  useEffect(() => {
    getOneUser(cookerId)
      .then((res) => {
        setCooker(res.data.oneUser[0]);
      })
      .catch((err) => {
        console.error("err", err);
      });
  }, []);

  return (
    <>
      <section className="profile">
        <aside className="profilSidebar">
          <h1 className="titleAccount">USER PROFIL</h1>
          <div className="user-info">
            <div className="userImage">
              <img src={adminImageDefault} alt="Profil de l'utilisateur" />
            </div>

            <h2>
              {cooker.firstName} {cooker.lastName}
            </h2>
          </div>
        </aside>

        <div className="infoContainer">
          <div className="user-details">
            <h3>Your Profil Info:</h3>
            <ul className="list-container">
              <li className="listItem">
                <h4>Email:</h4>
                <p>{cooker.email}</p>
              </li>
            </ul>
          </div>

          {cookerId === userId && (
            <div className="buttonsContainer">
              <Link to="/editAccount" className="btn">
                Modifier le profil
              </Link>
              <Link to="/dashboard" className="btn">
                Back to Dashboard
              </Link>
              <button onClick={() => onLogout()} className="btn">
                {" "}
                Se deconnecter
              </button>
              <Link to="/" className="btn">
                Retour à la page d'accueil
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default UserProfile;
