// src/stores/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  // Add a recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Update recipe by id. `updates` is an object with fields to change.
  updateRecipe: (id, updates) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...updates } : r)),
    })),

  // Delete recipe by id
  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),

  // Replace all recipes (useful for initial load)
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
