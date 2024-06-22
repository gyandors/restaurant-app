import { useContext, useRef } from "react";
import { categoriesContext } from "../../context/admin-context";

export default function CategoriesForm(props) {
  const catCtx = useContext(categoriesContext);

  const nameRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();

  async function handleFormSubmit(event) {
    const newCategory = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      image: imageRef.current.value,
    };

    event.preventDefault();
    const response = await fetch(
      "https://restaurant-app-17-default-rtdb.firebaseio.com/admin/categories.json",
      {
        method: "POST",
        body: JSON.stringify(newCategory),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (response.ok) {
      catCtx.onAddCategories({ ...newCategory, id: data.name });
      props.onCloseForm();
    }
  }

  return (
    <>
      <div className="w-full h-full top-0 left-0 fixed bg-black bg-opacity-15 z-10"></div>
      <div className="w-96 m-auto p-5 border shadow rounded-xl bg-white flex flex-col fixed z-20 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        <div className="mb-10 flex justify-between">
          <h1 className="text-xl font-semibold">Add Category</h1>
          <button
            className="text-xl font-semibold"
            onClick={() => props.onCloseForm()}
          >
            🗙
          </button>
        </div>
        <form className="w-full" onSubmit={handleFormSubmit}>
          <div className="mb-5">
            <label className="block" htmlFor="name">
              Category Name
            </label>
            <input
              className="ring-1 ring-inset ring-gray-600 w-full rounded-md p-1"
              type="text"
              id="name"
              ref={nameRef}
            />
          </div>
          <div className="mb-5">
            <label className="block" htmlFor="description">
              Category Description
            </label>
            <textarea
              className="ring-1 ring-inset ring-gray-600 w-full rounded-md p-1 min-h-20 max-h-20"
              id="description"
              ref={descriptionRef}
            />
          </div>
          <div className="mb-5">
            <label className="block" htmlFor="image">
              Category Image URL
            </label>
            <input
              className="ring-1 ring-inset ring-gray-600 w-full rounded-md p-1"
              type="url"
              id="image"
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
    </>
  );
}
