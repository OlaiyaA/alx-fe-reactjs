import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";

const Home = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Recipe Finder</h1>

      {/* Search bar */}
      <SearchBar />

      {/* Filtered recipes */}
      <RecipeList />
    </div>
  );
};

export default Home;
