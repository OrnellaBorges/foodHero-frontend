import React, { useState, useEffect } from "react";
import axios from "axios";

function CreateAd() {
    const [recipeImage, setRecipeImage] = useState("");

    useEffect(() => {
        const fetchRandomRecipeImage = async () => {
            try {
                const response = await axios.get(
                    "https://www.themealdb.com/api/json/v1/1/random.php"
                );
                const randomRecipe = response.data.meals[0];

                if (randomRecipe) {
                    setRecipeImage(randomRecipe.strMealThumb);
                }
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération de l'image de recette aléatoire : ",
                    error
                );
            }
        };

        fetchRandomRecipeImage();
    }, []);

    return (
        <div>
            <h1>Créer une annonce</h1>
            <img src={recipeImage} alt="Image de recette aléatoire" />
            {/* Autres champs pour la création d'annonce */}
        </div>
    );
}

export default CreateAd;
