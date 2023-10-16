import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css"; // Importez la feuille de style CSS de Leaflet
import L from "leaflet";
import "./MapComponent.css"; // Importez le fichier CSS que vous avez créé

function MapComponent() {
    useEffect(() => {
        // Créez une instance de carte Leaflet et spécifiez le conteneur HTML où la carte doit être affichée.
        const map = L.map("map-container").setView([51.505, -0.09], 13);

        // Ajoutez une couche de carte OpenStreetMap à la carte.
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
    }, []);

    return <div id="map-container"></div>;
}

export default MapComponent;
