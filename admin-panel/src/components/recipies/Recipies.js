import { useContext, useState } from "react";
import RecipiesForm from "./RecipiesForm";
import RecipeItems from "./RecipeItems";
import { recipiesContext } from "../../context/admin-context";

export default function Recipies() {
  const [showForm, setShowForm] = useState(false);
  const recCtx = useContext(recipiesContext);

  return (
    <div className="w-[50rem] m-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Recipies</h1>
        <button
          className="text-sm underline text-blue-600"
          onClick={() => setShowForm(true)}
        >
          + Add Recipe
        </button>
      </div>
      <ul>
        {recCtx.recipies.map((r) => {
          return (
            <RecipeItems
              key={r.id}
              id={r.id}
              name={r.name}
              category={r.category}
              ingredients={r.ingredients}
              price={r.price}
              image={r.image}
            />
          );
        })}
      </ul>
      {showForm && <RecipiesForm onCloseForm={() => setShowForm(false)} />}
    </div>
  );
}
