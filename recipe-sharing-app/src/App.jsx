import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
