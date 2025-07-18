import { useEffect, useState, type FC } from "react";

const FeaturedCategories: FC = () => {
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [visibleCategories, setVisibleCategories] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);

  const featured = ["Vegetarian", "Vegan", "Seafood", "Dessert"];

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        const names = data.categories.map((cat: any) => cat.strCategory);
        setAllCategories(names);

        const initial = names.filter((name: string) => featured.includes(name));
        setVisibleCategories(initial);
      })
      .catch((err) => console.error("Couldn't load categories", err));
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
    <div className="cats bg-base-100">
      <h2>Categories</h2>
      <ul>
        {visibleCategories.map((name) => (
          <li key={name} className="card-body">{name}</li>
        ))}
      </ul>
      <button className="btn btn-secondary" onClick={toggleView}>
        {showAll ? "Show less" : "Show all"}
      </button>
    </div>
  );
};

export default FeaturedCategories;
