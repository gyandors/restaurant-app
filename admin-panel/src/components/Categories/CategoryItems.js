import { useContext, useState } from "react";
import { categoriesContext } from "../../context/admin-context";
import CategoriesForm from "./CategoriesForm";

export default function CategoryItems(props) {
  const [isEditing, setIsEditing] = useState(false);
  const catCtx = useContext(categoriesContext);

  async function handleEdit() {
    setIsEditing(true);
  }

  async function handleDelete() {
    const response = await fetch(
      `https://restaurant-app-17-default-rtdb.firebaseio.com/admin/categories/${props.id}.json`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      catCtx.onDeleteCategories(props.id);
    }
  }

  return (
    <li className="flex justify-between items-center gap-5 w-96 m-auto border rounded mb-5 p-2">
      <img
        className="h-20 w-24 rounded-md"
        src={props.image}
        alt="Category pic"
      />
      <div className="flex-1">
        <h1 className="font-medium">{props.name}</h1>
        <p className="text-sm">{props.description}</p>
      </div>
      <div>
        <button
          className="mr-2 border rounded p-1 hover:bg-amber-500 hover:text-white"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="border rounded p-1 hover:bg-red-600 hover:text-white"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      {isEditing && (
        <CategoriesForm
          editing={isEditing}
          id={props.id}
          name={props.name}
          description={props.description}
          image={props.image}
          onCloseForm={() => setIsEditing(false)}
        />
      )}
    </li>
  );
}
