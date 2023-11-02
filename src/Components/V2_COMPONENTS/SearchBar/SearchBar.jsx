import React, { useState } from "react";

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="searchBarContainer">
            <input
                className="inputTest"
                type="text"
                placeholder="Rechercher une recette"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="buttonTest" onClick={handleSearch}>
                Rechercher
            </button>
        </div>
    );
}

export default SearchBar;
