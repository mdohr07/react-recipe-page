import type { FC } from "react";

const Home: FC = () => {
  return (
    <main>
      <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary btn-xl">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
