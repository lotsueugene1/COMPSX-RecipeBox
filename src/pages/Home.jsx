import RecipeGrid from '../components/RecipeGrid';
import { useState, useEffect } from 'react';
import { getPopularRecipes } from '../services/recipeService';
function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
	// Define a second async function to invoke our service function
    	const fetchRecipes = async () => {
const recipeData = await getPopularRecipes();
setRecipes(recipeData);
};
	// Immediately call the service function
fetchRecipes();
  }, []); // Empty dependency array

  return (
    <main className="main-content">
      <div className="content-header">
        <h2>Popular Recipes</h2>
        <p>Discover delicious recipes for every meal</p>
      </div>
      <RecipeGrid recipes={recipes} />
    </main>
  );
};

export default Home;