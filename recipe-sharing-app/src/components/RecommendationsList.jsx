import useRecipeStore from "./recipeStore";

const RecommendationsList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  const recommended = recipes.filter(
    (recipe) => !favorites.includes(recipe.id)
  );

  return (
    <div>
      <h2>Recommended Recipes</h2>

      {recommended.length === 0 && <p>You’ve viewed all recipes!</p>}

      {recommended.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: "12px" }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
