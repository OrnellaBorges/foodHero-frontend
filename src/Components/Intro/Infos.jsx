import React from "react";
import { Link } from "react-router-dom";

import "./info.css";

//import assets
import table from "../../assets/table.png";
//import gaspi from "../../assets/gaspillage.jpg";
import gaspi from "../../assets/gaspi.jpeg";
import Button from "../Buttons/Button";

const Infos = () => {
    return (
        <>
            <div className="bannerStyle">
                <img
                    src="src/Components/Intro/assets/share.jpg"
                    alt="illustration pour la page info sur le projet"
                />
            </div>
            <div className="titleInfo-container">
                <h1 className="titleBanner">Et si vous en saviez plus ? </h1>
            </div>

            <div className="containerImgtext">
                <div className="info-image-Container">
                    <img
                        src={table}
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
            <div className="containerImgtext">
                <div className="info-image-Container">
                    <img
                        src={gaspi}
                        alt="illustration pour la page info sur le projet"
                    />
                </div>
                <div className="textBlock">
                    <h2 className="text-title">
                        Lutter contre le gaspillage alimentaire
                    </h2>
                    <p>
                        Le gaspillage alimentaire en France est un problème
                        préoccupant qui se manifeste par le jet de grandes
                        quantités de nourriture encore comestible. Ce phénomène
                        a des conséquences économiques, environnementales et
                        sociales significatives. Chaque année, des millions de
                        tonnes de nourriture sont gaspillées en France, depuis
                        la production agricole jusqu'à la consommation finale.
                        Les causes du gaspillage alimentaire sont diverses,
                        allant des normes de beauté des produits alimentaires à
                        la surproduction, en passant par les habitudes de
                        consommation et le manque de sensibilisation. Ce
                        gaspillage entraîne une perte de ressources précieuses,
                        contribue aux émissions de gaz à effet de serre et
                        aggrave les problèmes de sécurité alimentaire pour les
                        populations vulnérables. Pourtant, la France a pris des
                        mesures pour lutter contre le gaspillage alimentaire,
                        notamment en introduisant des lois pour encourager les
                        supermarchés à donner plutôt qu'à jeter la nourriture
                        excédentaire. Les initiatives de sensibilisation se
                        multiplient également, incitant les individus, les
                        entreprises et les organisations à réduire leur
                        gaspillage. La réduction du gaspillage alimentaire en
                        France est un enjeu majeur pour la durabilité, la
                        sécurité alimentaire et la justice sociale. L'éducation,
                        la réglementation et l'engagement de tous les acteurs de
                        la chaîne alimentaire sont essentiels pour relever ce
                        défi et favoriser une gestion plus responsable des
                        ressources alimentaires en France.
                    </p>
                </div>
            </div>
            <div className="containerImgtext">
                <div className="conclusion-container">
                    <h2 className="text-title">Pour finir...</h2>
                    <p>
                        L'application FOODHERO ce destine directement à cibler
                        le frigo des particuliers. Pour reduire la précarité
                        alimentaire et le gaspillage nous avons tous un rôle à
                        jouer.
                    </p>
                    <Link to="/">Retour à la page d'acceuil</Link>
                </div>
            </div>
        </>
    );
};

export default Infos;
