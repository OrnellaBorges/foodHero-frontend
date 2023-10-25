import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { oneAd } from "../../../../../api/ApiAds";

import "./oneAd.css";

import EditButton from "../../../../Buttons/Button";
import DeleteButton from "../../../../Buttons/Button";

//import assets
import pasta from "../../../../../assets/pasta.jpg";

//import icons
const UserOneAd = (props) => {
  const userId = props.userId;
  const { adId } = useParams();
  console.log("adId", adId);

  const [ad, setAd] = useState([]);
  //console.log("ad.userId", ad.userId);

  useEffect(() => {
    oneAd(adId)
      .then((res) => {
        console.log("res", res);
        //console.log("res.data.oneAd[0]", res.data.oneAd[0]);
        //setAd(res.data.oneAd[0]);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <>
      <section className="oneAd">
        <div className="containerInfo">
          <div className="imageCard-container">
            <img
              className="
                    imgAd"
              src={pasta}
              alt="pates au poulet et aux champignons"
            />
          </div>

          <div className="adInfo">
            <h4 className="adTitle">titre</h4>
            <div className="jesaispas">
              <p className="adDescription">description</p>
              <p className="price">prix: 10 €</p>
            </div>
            <div className="buttonContainer flex">
              <div className="buttonContainer">
                <Link to={`/editAd/${adId}`}>
                  <EditButton text="modifier l'annonce" />
                </Link>

                <Link to="">
                  <DeleteButton text="supprimer l'annonce" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserOneAd;
