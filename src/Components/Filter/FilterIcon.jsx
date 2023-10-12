import React from "react";

import "./filterIcon.css";

const FilterIcon = () => {
    return (
        <>
            <div class="filter-container">
                <div class="filter-option">
                    <i class="fas fa-filter"></i>
                </div>
                <div class="filter-option">
                    <i class="fas fa-sort-amount-up"></i>
                </div>
                <div class="filter-option">
                    <i class="fas fa-sort-amount-down"></i>
                </div>
            </div>
        </>
    );
};

export default FilterIcon;

//<a href="https://www.flaticon.com/fr/icones-gratuites/carotte" title="carotte icônes">Carotte icônes créées par max.icons - Flaticon</a>
