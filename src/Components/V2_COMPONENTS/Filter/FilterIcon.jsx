import React from "react";
// FROM CHATGPT
import "./filterIcon.css";

const FilterIcon = () => {
    return (
        <>
            {/*il faut mapper une liste d'icon pour generer des Li autant de fois qu'il y a d'icone de filtrage*/}
            <ul class="filterIcon-container">
                <li class="filterIcon-option">
                    <i class="fas fa-filter"></i>
                </li>
                <li class="filter-option">
                    <i class="fas fa-sort-amount-up"></i>
                </li>
                <li class="filter-option">
                    <i class="fas fa-sort-amount-down"></i>
                </li>
            </ul>
        </>
    );
};

export default FilterIcon;

//<a href="https://www.flaticon.com/fr/icones-gratuites/carotte" title="carotte icônes">Carotte icônes créées par max.icons - Flaticon</a>
