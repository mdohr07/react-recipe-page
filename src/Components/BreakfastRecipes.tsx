import { useEffect, useState, type FC } from "react";

const BreakfastRecipes: FC = () => {
  const [breakfast, setBreakfast] = useState<string[]>([]);

    type Category = {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
  };
  
  useEffect(() => {
    async function fetchBreakfast() {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );

        if (!response.ok) {
          throw new Error(`HTTP-Error! Status: ${response.status}`);
        }

        const banana = await response.json();
        const categories: Category[] = banana.categories;

        const names = categories.map((cat) => cat.strCategory);
        setBreakfast(names);

      } catch (err) {
        console.error("Couldn't load data", err);
      }
    }
    fetchBreakfast();
  }, []);

  return <div className="breakfast-wrapper bg-base-300">
    <h2>Breakfast!</h2>
    <p>{breakfast}</p>
    </div>;
};

export default BreakfastRecipes;
