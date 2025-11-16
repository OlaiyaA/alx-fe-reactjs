import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Initialize or replace the whole list
  setRecipes: (recipes) =>
    set(() => ({
      recipes,
    })),
}));

export default useRecipeStore;
