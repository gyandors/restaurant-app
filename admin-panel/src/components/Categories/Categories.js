import { useContext, useState } from "react";

import CategoriesForm from "./CategoriesForm";
import CategoryItems from "./CategoryItems";
import { categoriesContext } from "../../context/admin-context";

export default function Categories() {
  const [showForm, setShowForm] = useState(false);
  const catCtx = useContext(categoriesContext);

  return (
    <div className="w-[50rem] m-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Categories</h1>
        <button
          className="text-sm underline text-blue-600"
          onClick={() => setShowForm(true)}
        >
          + Add Category
        </button>
      </div>
      <ul>
        {catCtx.categories.map((c) => {
          return (
            <CategoryItems
              key={c.id}
              id={c.id}
              name={c.name}
              description={c.description}
              image={c.image}
            />
          );
        })}
      </ul>
      {showForm && <CategoriesForm onCloseForm={() => setShowForm(false)} />}
    </div>
  );
}
