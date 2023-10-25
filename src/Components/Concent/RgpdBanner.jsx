import { useState, useEffect } from "react";
import Cookies from "js-cookie";

//import "./rgpd.css";
import "./cookie.css";

//import assets
import cookies from "../../assets/cookie.jpg";

const RgpdBanner = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [consentGiven, setConsentGiven] = useState(
        Cookies.get("rgpdConsent")
    );

    useEffect(() => {
        // Vérifie si l'utilisateur a déjà donné son consentement
        if (!consentGiven) {
            setShowBanner(true);
        }
    }, [consentGiven]);

    const handleAccept = () => {
        // L'utilisateur donne son consentement
        setConsentGiven(true);
        Cookies.set("rgpdConsent", "true", { expires: 0.1 }); // Stocke le consentement pendant 1 an
        setShowBanner(false);
    };

    const handleReject = () => {
        // L'utilisateur refuse le consentement
        setConsentGiven(false);
        Cookies.set("rgpdConsent", "false", { expires: 365 }); // Stocke le refus pendant 1 an
        setShowBanner(false);
        // Désactiver le suivi des cookies ici si nécessaire
    };

    return (
        showBanner && (
            <aside className="cookie-container">
                <div className="cookie">
                    <div className="cookie-img-container">
                        <img src={cookies} alt="image de cookies" />
                    </div>
                    <div className="content">
                        <h1>Cookies Consent</h1>
                        <p>
                            This website use Cookies to ensure you get the best
                            experience on your website.
                        </p>
                        <p>
                            Nous utilisons des cookies pour améliorer votre
                            expérience.
                        </p>
                        <div className="buttons flex">
                            <button className="btn" onClick={handleAccept}>
                                Accepter
                            </button>
                            <button
                                className="btn transparent"
                                onClick={handleReject}
                            >
                                Refuser
                            </button>
                        </div>
                    </div>
                </div>
                {/* <div className="rgpd-banner">
                    <p>
                        Nous utilisons des cookies pour améliorer votre
                        expérience.
                    </p>
                    <button onClick={handleAccept}>Accepter</button>
                    <button onClick={handleReject}>Refuser</button>
                </div> */}
            </aside>
        )
    );
};

export default RgpdBanner;
