import { useEffect, useState, type FC } from "react";
import { Link } from "react-router-dom";

const FeaturedCategories: FC = () => {
  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [visibleCategories, setVisibleCategories] = useState<Category[]>([]);
  const [showAll, setShowAll] = useState(false);
  const featured = ["Vegetarian", "Vegan", "Seafood", "Dessert"];

  type Category = {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
  };

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );

        if (!response.ok) {
          throw new Error(`HTTP-Error! Status: ${response.status}`);
        }

        const data = await response.json();
        const categories: Category[] = data.categories;

        setAllCategories(categories);
        const initial = categories.filter((cat) =>
          featured.includes(cat.strCategory)
        );
        setVisibleCategories(initial);
      } catch (err) {
        console.error("Couldn't load categories", err);
      }
    }
    fetchCategories();
  }, []);

  const toggleView = () => {
    if (showAll) {
      const filtered = allCategories.filter((cat) => featured.includes(cat.strCategory));
      setVisibleCategories(filtered);
    } else {
      setVisibleCategories(allCategories);
    }
    setShowAll(!showAll);
  };

  return (
    <section className="cat-wrapper">
      <div className="cats grid grid-cols-2 md:grid-cols-4 gap-4">
        {visibleCategories.map((category) => (
          <section key={category.idCategory}>
            <h2 className="card-title text-2xl font-bold">{category.strCategory}</h2>
            <div className="card bg-base-100 shadow-sm card-border">
              <figure className="h-32 overflow-hidden">
                <img
                  src={`https://www.themealdb.com/images/category/${category.strCategory}.png`}
                  alt={category.strCategory}
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body p-3">
                <div className="card-actions justify-end">
                  <Link to={`/categories/${category.idCategory}`}>
                    <button className="btn btn-sm btn-dash btn-primary">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}

        <div className="col-span-full flex justify-center mt-2">
          <button className="btn btn-neutral" onClick={toggleView}>
            {showAll ? "Show less" : "Show all"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
