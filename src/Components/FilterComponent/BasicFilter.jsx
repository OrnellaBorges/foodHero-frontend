import React, { useState } from "react";

import "./filter.css";

function BasicFilter({ data, onFilter }) {
    const [categorie, setCategorie] = useState("Toutes"); // État pour stocker la catégorie sélectionnée

    const categories = ["Toutes", "Catégorie 1", "Catégorie 2", "Catégorie 3"]; // Liste des catégories

    const handleCategorieChange = (e) => {
        const nouvelleCategorie = e.target.value;
        setCategorie(nouvelleCategorie);
        onFilter(nouvelleCategorie); // Appeler la fonction de filtrage avec la nouvelle catégorie
    };

    return (
        <div>
            <label htmlFor="categorie">Filtrer par catégorie :</label>
            <select
                id="categorie"
                value={categorie}
                onChange={handleCategorieChange}
            >
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default BasicFilter;
