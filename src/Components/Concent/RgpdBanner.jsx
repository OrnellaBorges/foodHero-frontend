import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./rgpd.css";

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
        Cookies.set("rgpdConsent", "true", { expires: 365 }); // Stocke le consentement pendant 1 an
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
            <div className="rgpd-banner">
                <p>
                    Nous utilisons des cookies pour améliorer votre expérience.
                </p>
                <button onClick={handleAccept}>Accepter</button>
                <button onClick={handleReject}>Refuser</button>
            </div>
        )
    );
};

export default RgpdBanner;
