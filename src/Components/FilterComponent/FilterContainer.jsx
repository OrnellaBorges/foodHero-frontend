import React, { useState } from "react";
import BasicFilter from "./BasicFilter";

import "./filter.css";

function FilterContainer() {
    const [elements, setElements] = useState([
        { id: 1, nom: "Élément 1", categorie: "Catégorie 1" },
        { id: 2, nom: "Élément 2", categorie: "Catégorie 2" },
        { id: 3, nom: "Élément 3", categorie: "Catégorie 1" },
        // ... autres éléments
    ]);

    const [elementsFiltres, setElementsFiltres] = useState(elements);

    const handleFiltrage = (categorie) => {
        if (categorie === "Toutes") {
            setElementsFiltres(elements);
        } else {
            const elementsFiltres = elements.filter(
                (element) => element.categorie === categorie
            );
            setElementsFiltres(elementsFiltres);
        }
    };

    return (
        <div>
            <h1>Liste d'Éléments</h1>
            <BasicFilter data={elements} onFilter={handleFiltrage} />
            <ul>
                {elementsFiltres.map((element) => (
                    <li key={element.id}>{element.nom}</li>
                ))}
            </ul>
        </div>
    );
}

export default FilterContainer;
