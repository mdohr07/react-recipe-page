import type { FC } from "react";
import BreakfastRecipes from "./BreakfastRecipes";
import FeaturedCategories from "./FeaturedCategories";

const Home: FC = () => {
  return (
    <div>
      <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Just nom it</h1>
            <p className="py-6">
              Discover simple, creative recipes and start cooking straight away
              - without any gourmet fuss. Perfect for weeknight dinners, lazy
              weekends, or whenever you're just hungry and out of ideas.
            </p>
            <button className="btn btn-primary btn-xl">Start cooking</button>
          </div>
        </div>
      </div>
      <BreakfastRecipes/>
      <FeaturedCategories />
    </div>
  );
};

export default Home;
