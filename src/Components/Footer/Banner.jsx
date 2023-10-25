import React, { useEffect, useRef, useState } from "react";
import "./banner.css"; // Assurez-vous de créer un fichier CSS pour les styles

const Banner = () => {
    const stocks = [
        "FOODHERO",
        "PARTAGER",
        "ECONOMISER",
        "CUISINER",
        "FOODHERO",
        "PARTAGER",
        "ECONOMISER",
        "CUISINER",
    ]; // Liste des symboles boursiers à faire défiler
    const stockWidth = 500; // Largeur d'un élément (ajustez selon vos besoins)
    const [scrollLeft, setScrollLeft] = useState(0);
    const stockRef = useRef(null);

    useEffect(() => {
        const stockElement = stockRef.current;
        const stockCount = stocks.length;

        const scroll = () => {
            setScrollLeft((prevScrollLeft) => {
                const newScrollLeft = prevScrollLeft + 1;
                if (newScrollLeft >= stockCount * stockWidth) {
                    return 0;
                }
                return newScrollLeft;
            });
        };

        const interval = setInterval(scroll, 10); // Ajustez la vitesse de défilement ici

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="stock-ticker-container">
            <ul className="stock-ticker" ref={stockRef}>
                {stocks.map((stock, index) => (
                    <li
                        key={index}
                        className="stock-item"
                        style={{ width: stockWidth }}
                    >
                        {stock}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Banner;
