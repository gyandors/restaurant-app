import { useContext, useRef } from "react";
import {
  categoriesContext,
  recipiesContext,
} from "../../context/admin-context";

export default function RecipiesForm(props) {
  const recCtx = useContext(recipiesContext);
  const catCtx = useContext(categoriesContext);

  const nameRef = useRef();
  const categoryRef = useRef();
  const ingredientsRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();

  async function handleFormSubmit(event) {
    event.preventDefault();
    const newRecipe = {
      name: nameRef.current.value,
      category: categoryRef.current.value,
      ingredients: ingredientsRef.current.value,
      price: priceRef.current.value,
      image: imageRef.current.value,
    };

    if (!props.editing) {
      const response = await fetch(
        "https://restaurant-app-17-default-rtdb.firebaseio.com/admin/recipies.json",
        {
          method: "POST",
          body: JSON.stringify(newRecipe),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        recCtx.onAddRecipies({ ...newRecipe, id: data.name });
        props.onCloseForm();
      }
    } else {
      const response = await fetch(
        `https://restaurant-app-17-default-rtdb.firebaseio.com/admin/recipies/${props.id}.json`,
        {
          method: "PUT",
          body: JSON.stringify(newRecipe),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        recCtx.onEditRecipies({ ...newRecipe, id: props.id });
        props.onCloseForm();
      }
    }
  }

  return (
    <>
      <div className="w-full h-full top-0 left-0 fixed bg-black bg-opacity-15 z-10"></div>
      <div className="w-96 max-h-96 m-auto p-5 border shadow rounded-xl bg-white flex flex-col fixed z-20 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        <div className="mb-2 flex justify-between">
          <h1 className="text-xl font-semibold">Add Recipe</h1>
          <button
            className="text-xl font-semibold"
            onClick={() => props.onCloseForm()}
          >
            🗙
          </button>
        </div>
        <div className="max-h-96 overflow-auto">
          <form className="w-full" onSubmit={handleFormSubmit}>
            <div className="mb-5">
              <label className="block" htmlFor="name">
                Recipe Name
              </label>
              <input
                className="ring-1 ring-inset ring-gray-600 w-full rounded-md p-1"
                type="text"
                id="name"
                defaultValue={props.name}
                ref={nameRef}
              />
            </div>
            <div className="mb-5">
              <label className="block" htmlFor="category">
                Recipe Category
              </label>
              <select
                className="ring-1 ring-inset ring-gray-600 w-full rounded-md p-1"
                name="category"
                id="category"
                defaultValue={props.category}
                ref={categoryRef}
              >
                <option value=" " hidden></option>
                {catCtx.categories.map((c, i) => {
                  return (
                    <option key={i} value={c.name}>
                      {c.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-5">
              <label className="block" htmlFor="ingredients">
                Recipe Ingredients
              </label>
              <textarea
                className="ring-1 ring-inset ring-gray-600 w-full rounded-md p-1 min-h-20 max-h-20"
                id="ingredients"
                defaultValue={props.ingredients}
                ref={ingredientsRef}
              />
            </div>
            <div className="mb-5">
              <label className="block" htmlFor="price">
                Recipe Price
              </label>
              <input
                className="ring-1 ring-inset ring-gray-600 w-full rounded-md p-1"
                type="number"
                id="price"
                defaultValue={props.price}
                ref={priceRef}
              />
            </div>
            <div className="mb-5">
              <label className="block" htmlFor="image">
                Recipe Image URL
              </label>
              <input
                className="ring-1 ring-inset ring-gray-600 w-full rounded-md p-1"
                type="url"
                id="image"
                defaultValue={props.image}
                ref={imageRef}
              />
            </div>
            <div>
              <button
                className="border rounded-lg py-1 px-2 text-white bg-amber-500 hover:bg-amber-600"
                type="submit"
              >
                Save
              </button>
              <button
                className="border rounded-lg py-1 px-2 text-white bg-amber-500 hover:bg-amber-600"
                type="cancel"
                onClick={() => props.onCloseForm()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
