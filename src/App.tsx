import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import RecipeDetail from "./Components/RecipeDetail";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
            <Route path="*" element={<Home />} />{" "}
            {/* Fallback für alle anderen Pfade */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
