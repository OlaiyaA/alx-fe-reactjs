import React from "react";
import useRecipeStore from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      style={{ padding: "8px", width: "100%", marginBottom: "12px" }}
    />
  );
};
export default SearchBar;
