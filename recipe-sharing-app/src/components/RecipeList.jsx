import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
      const recipes = useRecipeStore((state) => state.recipes);
      const filtered = useRecipeStore((state) => state.filteredRecipes);
      
      return (
        <div>
          <h2>Recipes</h2>

          {recipes.map((recipe) => (
            <div key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <h3>{recipe.title}</h3>
              </Link>
            </div>
          ))}
        
          {filtered.length === 0 ? (
            <p>No matching recipes found.</p>
          ) : (
            filtered.map((recipe) => (
              <div key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
              </div>
            ))
          )}
        </div>
      );
    };
export default RecipeList;
