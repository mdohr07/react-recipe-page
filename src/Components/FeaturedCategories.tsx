import { useEffect, useState, type FC } from "react";

const FeaturedCategories: FC = () => {
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [visibleCategories, setVisibleCategories] = useState<string[]>([]);
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
          throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }

        const data = await response.json();
        const categories: Category[] = data.categories;

        const names = categories.map((cat) => cat.strCategory);
        setAllCategories(names);

        const initial = names.filter((name) => featured.includes(name));
        setVisibleCategories(initial);
      } catch (err) {
        console.error("Couldn't load categories", err);
      }
    }

    fetchCategories();
  }, []);

  const toggleView = () => {
    if (showAll) {
      const filtered = allCategories.filter((name) => featured.includes(name));
      setVisibleCategories(filtered);
    } else {
      setVisibleCategories(allCategories);
    }
    setShowAll(!showAll);
  };

  return (
    <section className="cat-wrapper">
      <div className="cats grid grid-cols-2 md:grid-cols-4 gap-4">
        {visibleCategories.map((name) => (
          <section>
            <h2 className="card-title text-sm">{name}</h2>
            <div key={name} className="card bg-base-100 shadow-sm card-border">
              <figure className="h-32 overflow-hidden">
                <img
                  src={`https://www.themealdb.com/images/category/${name}.png`}
                  alt={name}
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body p-3">
                <div className="card-actions justify-end">
                  <button className="btn btn-sm btn-dash btn-primary">View</button>
                </div>
              </div>
            </div>
          </section>
        ))}

        <div className="col-span-full flex justify-center mt-2">
          <button className="btn btn btn btn-neutral" onClick={toggleView}>
            {showAll ? "Show less" : "Show all"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
