import { createContext, useState } from "react";

export const categoriesContext = createContext({
  categories: [],
  onAddCategories: () => {},
  onEditCategories: () => {},
  onDeleteCategories: () => {},
});

export const recipiesContext = createContext({
  recipies: [],
  onAddRecipies: () => {},
  onEditRecipies: () => {},
  onDeleteRecipies: () => {},
});

export const ordersContext = createContext({
  orders: [],
  onEditOrders: () => {},
});

export default function AdminProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [recipies, setRecipies] = useState([]);
  const [orders, setOrders] = useState([]);

  function handleAddCategories(category) {
    setCategories((prev) => [...prev, category]);
  }
  function handleEditCategories(category) {
    const updated = categories.map((c) => {
      if (c.id === category.id) {
        return category;
      }
      return c;
    });
    setCategories(updated);
  }
  function handleDeleteCategories(id) {
    const updated = categories.filter((c) => c.id !== id);
    setCategories(updated);
  }

  const categoriesValue = {
    categories: categories,
    onAddCategories: handleAddCategories,
    onEditCategories: handleEditCategories,
    onDeleteCategories: handleDeleteCategories,
  };

  function handleAddRecipies(recipe) {
    setRecipies((prev) => [...prev, recipe]);
  }
  function handleEditRecipies(recipe) {
    const updated = recipies.map((r) => {
      if (r.id === recipe.id) {
        return recipe;
      }
      return r;
    });
    setRecipies(updated);
  }
  function handleDeleteRecipies(id) {
    const updated = recipies.filter((r) => r.id !== id);
    setRecipies(updated);
  }

  const recipiesValue = {
    recipies: recipies,
    onAddRecipies: handleAddRecipies,
    onEditRecipies: handleEditRecipies,
    onDeleteRecipies: handleDeleteRecipies,
  };

  function handleEditOrders(id) {}

  const ordersValue = {
    orders: orders,
    onEditOrders: handleEditOrders,
  };

  return (
    <categoriesContext.Provider value={categoriesValue}>
      <recipiesContext.Provider value={recipiesValue}>
        <ordersContext.Provider value={ordersValue}>
          {children}
        </ordersContext.Provider>
      </recipiesContext.Provider>
    </categoriesContext.Provider>
  );
}
