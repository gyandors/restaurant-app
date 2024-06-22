import { createContext } from "react";

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
  onAddOrders: () => {},
  onEditOrders: () => {},
  onDeleteOrders: () => {},
});

export default function AdminProvider({ children }) {
  function handleAddCategories(category) {}
  function handleEditCategories(id) {}
  function handleDeleteCategories(id) {}

  const categoriesValue = {
    categories: [],
    onAddCategories: handleAddCategories,
    onEditCategories: handleEditCategories,
    onDeleteCategories: handleDeleteCategories,
  };

  const recipiesValue = {
    recipies: [],
    onAddRecipies: () => {},
    onEditRecipies: () => {},
    onDeleteRecipies: () => {},
  };

  const ordersValue = {
    orders: [],
    onAddOrders: () => {},
    onEditOrders: () => {},
    onDeleteOrders: () => {},
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
