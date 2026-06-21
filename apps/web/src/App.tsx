import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeView from "./components/RecipeView";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 w-full">
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:slug" element={<RecipeView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
