const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img 
          src={recipe.image}
          alt={recipe.title}
        />
      </div>
      <div className="recipe-info">
        <h3 className="recipe-title">{recipe.title}</h3>
        <div className="recipe-details">
          <span className="recipe-time">⏱️ {recipe.readyInMinutes} min</span>
          <span className="recipe-servings">🍽️ {recipe.servings} servings</span>
        </div>
        <button className="favorite-button">♡ Add to Favorites</button>
      </div>
    </div>
  );
};

export default RecipeCard;