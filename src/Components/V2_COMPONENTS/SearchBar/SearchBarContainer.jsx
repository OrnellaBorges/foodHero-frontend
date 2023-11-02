import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

import "./test.css";

function SearchBarContainer() {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleSearch = async (searchTerm) => {
        try {
            const response = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
            );
            setImages(response.data.meals || []);
        } catch (error) {
            console.error("Erreur lors de la recherche :", error);
        }
    };

    const handleSelectImage = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className="divTest">
            <h1 searchBarTitle>Recherche de recettes</h1>
            <SearchBar onSearch={handleSearch} />
            <ImageList images={images} onSelectImage={handleSelectImage} />

            {selectedImage && (
                <div className="selected-image">
                    <img
                        src={selectedImage.strMealThumb}
                        alt={selectedImage.strMeal}
                    />
                    <p>{selectedImage.strMeal}</p>
                </div>
            )}
        </div>
    );
}

export default SearchBarContainer;
