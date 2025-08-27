import { useEffect, useState, type FC } from "react";
import { Link } from "react-router-dom";

    type Meal = {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
  };

  const BreakfastRecipes: FC = () => {
    const [breakfast, setBreakfast] = useState<Meal[]>([]);
  
  useEffect(() => {
    async function fetchBreakfast() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast`
        );

        if (!response.ok) {
          throw new Error(`HTTP-Error! Status: ${response.status}`);
        }

        const banana = await response.json();
        setBreakfast(banana.meals);


      } catch (err) {
        console.error("Couldn't load data", err);
      }
    }
    fetchBreakfast();
  }, []);

  return <section className="breakfast-wrapper bg-base-200 p-4">
  <h2 className="text-3xl font-bold mb-4">Breakfast Ideas</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
    {breakfast.map((meal) => (
      <Link key={meal.idMeal} to={`/recipe/${meal.idMeal}`}>
      <div className="card bg-base-100 shadow-md">
        <figure>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
        </figure>
        <div className="card-body">
          <h3 className="card-title text-lg">{meal.strMeal}</h3>
        </div>
      </div>
      </Link>
    ))}
  </div>
</section>
};

export default BreakfastRecipes;
