import React, { useEffect, useState, type FC } from "react";
import { useParams } from "react-router-dom"

type Meal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  strInstructions?: string;
};

const RecipeDetail: FC = () => {
  const { recipeId } = useParams();
  const [meal, setMeal] = useState<Meal | null>(null); 
  
  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP_Error! Status: ${response.status}`);
        }
        const data = await response.json();
        setMeal(data.meals[0]);
      } catch (err) {
        console.error("Couldn't load data", err);
      }
    }
    
    if (recipeId) { 
      fetchDetails();
    }
  }, [recipeId]);

  
  return (
    <div className="recipe-detail card bg-base-100 shadow-md">
      <h1>{meal?.strMeal}</h1>
      <figure>
          <img src={meal?.strMealThumb} alt={meal?.strMeal} />
        </figure>
        <h2>Instructions</h2>
      <p>{meal?.strInstructions}</p>
    </div>
  );
};

export default RecipeDetail;

