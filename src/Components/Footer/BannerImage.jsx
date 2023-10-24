import React, { useEffect, useRef, useState } from "react";
import "./banner.css"; // Assurez-vous de créer un fichier CSS pour les styles

const BannerImage = () => {
    const stockImages = [
        "../../assets/icons/ble.png",
        "../../assets/icons/ble.png",
        "../../assets/icons/ble.png",
        "../../assets/icons/ble.png",
        "../../assets/icons/ble.png",
    ]; // Liste des chemins d'images
    const imageWidth = 100; // Largeur d'une image (ajustez selon vos besoins)
    const [scrollLeft, setScrollLeft] = useState(0);
    const stockRef = useRef(null);

    useEffect(() => {
        const stockElement = stockRef.current;
        const imageCount = stockImages.length;

        const scroll = () => {
            setScrollLeft((prevScrollLeft) => {
                const newScrollLeft = prevScrollLeft + 1;
                if (newScrollLeft >= imageCount * imageWidth) {
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
            <div className="stock-ticker" ref={stockRef}>
                {stockImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index}`}
                        style={{ width: imageWidth, height: "auto" }}
                    />
                ))}
            </div>
        </div>
    );
};

export default BannerImage;
