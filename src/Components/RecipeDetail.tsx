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

  const getIngredients = (meal: Meal) => {
    const ingredients = [];
    for (let i = 1; i <=20; i++) {
      const ingredient = meal[`strIngredient${i}` as keyof Meal];

      if (ingredient && ingredient.trim() !== '') {
        ingredients.push(ingredient);
      }
    }
    return ingredients;
  }

  return (
    <div className="recipe-detail card bg-base-100 shadow-md">
      <h1>{meal?.strMeal}</h1>
      <figure>
          <img src={meal?.strMealThumb} alt={meal?.strMeal} />
        </figure>
        <h2>Ingredients</h2>
        <ul>
          {meal && getIngredients(meal).map((ingredients, index) => (
            <li key={index}>{ingredients}</li>
          ))}
        </ul>
        <h3>Instructions</h3>
      <p>{meal?.strInstructions}</p>
    </div>
  );
};

export default RecipeDetail;

