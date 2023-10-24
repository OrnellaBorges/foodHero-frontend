import React from "react";

import "./info.css";

//import assets
import pasta from "../../assets/pasta.jpg";

const Infos = () => {
    return (
        <>
            <div className="bannerStyle">
                <img
                    src="src/Components/Intro/assets/share.jpg"
                    alt="illustration pour la page info sur le projet"
                />
            </div>
            <h1 className="titleBanner">Et si vous en saviez plus ? </h1>
            <div className="containerImgtext">
                <div className="info-image-Container">
                    <img
                        src="src/Components/Intro/assets/share.jpg"
                        alt="illustration pour la page info sur le projet"
                    />
                </div>
                <div className="textBlock">
                    <h2 className="text-title">Pourquoi FoodHero?</h2>
                    <p>
                        La précarité alimentaire en France est un problème qui
                        touche de nombreuses personnes dans le pays. Elle se
                        caractérise par l'incapacité de certains individus ou
                        ménages à accéder à une alimentation saine et équilibrée
                        de manière régulière. Plusieurs facteurs contribuent à
                        cette situation, notamment la pauvreté, le chômage, les
                        inégalités sociales et la hausse des prix des denrées
                        alimentaires. La précarité alimentaire se manifeste par
                        une insécurité nutritionnelle, où les individus peuvent
                        sauter des repas, consommer des aliments de mauvaise
                        qualité nutritionnelle ou manquer d'éléments essentiels
                        à une alimentation saine. Les conséquences de la
                        précarité alimentaire sont multiples, allant de
                        problèmes de santé tels que la malnutrition, l'obésité
                        et les maladies chroniques à des effets sociaux,
                        psychologiques et éducatifs, en passant par une
                        exclusion sociale accrue. Pour lutter contre la
                        précarité alimentaire en France, de nombreuses
                        initiatives ont été mises en place, telles que les
                        associations caritatives, les banques alimentaires, les
                        programmes d'aide alimentaire et les politiques
                        gouvernementales visant à soutenir les populations
                        vulnérables. Cependant, malgré ces efforts, la précarité
                        alimentaire demeure un défi persistant. La précarité
                        alimentaire est un problème complexe qui nécessite une
                        approche globale, comprenant des mesures visant à
                        réduire la pauvreté, à renforcer l'éducation
                        nutritionnelle, à encourager la production locale
                        d'aliments sains et à promouvoir l'accès équitable à une
                        alimentation de qualité pour tous les citoyens. La
                        sensibilisation et la mobilisation de la société sont
                        essentielles pour lutter efficacement contre ce problème
                        et garantir à chacun le droit à une alimentation
                        adéquate.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Infos;

/* <div className="infoImg-container">
                    <img
                        src="src/Components/Intro/assets/share.jpg"
                        alt="illustration pour la page info sur le projet"
                    />
                </div> */
