import { useContext, useState } from "react";
import CategoriesForm from "./CategoriesForm";
import { categoriesContext } from "../../context/admin-context";

export default function Categories() {
  const [showForm, setShowForm] = useState(false);

  const catCtx = useContext(categoriesContext);

  return (
    <div className="m-2">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Categories</h1>
        <button
          className="text-sm underline text-blue-600"
          onClick={() => setShowForm(true)}
        >
          + Add Category
        </button>
      </div>
      {showForm && <CategoriesForm onCloseForm={() => setShowForm(false)} />}
    </div>
  );
}
