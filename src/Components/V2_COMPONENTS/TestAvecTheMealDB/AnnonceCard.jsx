import React, { useState, useEffect } from "react";
import axios from "axios";

function AnnonceCard({ annonce }) {
    const [mealData, setMealData] = useState(null);

    useEffect(() => {
        // Effectuez une requête vers l'API "The Meal DB" pour obtenir des détails sur un repas
        axios
            .get(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${annonce.mealId}`
            )
            .then((response) => {
                setMealData(response.data.meals[0]);
            })
            .catch((error) => {
                console.error(
                    "Erreur lors de la récupération des détails du repas :",
                    error
                );
            });
    }, [annonce.mealId]);

    return (
        <div className="annonce-card">
            <h3>{annonce.title}</h3>
            <img src={annonce.image} alt={annonce.title} />

            {mealData && (
                <div className="meal-details">
                    <h4>Repas associé</h4>
                    <p>Nom du repas : {mealData.strMeal}</p>
                    <p>Zone de cuisine : {mealData.strArea}</p>
                    <p>
                        Instructions de préparation : {mealData.strInstructions}
                    </p>
                </div>
            )}
        </div>
    );
}

export default AnnonceCard;
