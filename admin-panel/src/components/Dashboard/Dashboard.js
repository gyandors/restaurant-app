import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  categoriesContext,
  recipiesContext,
} from "../../context/admin-context";

let initial = true;

export default function Dashboard() {
  const catCtx = useContext(categoriesContext);
  const recCtx = useContext(recipiesContext);

  async function fetchData() {
    const response = await fetch(
      "https://restaurant-app-17-default-rtdb.firebaseio.com/admin.json"
    );
    const data = await response.json();

    const categories = data.categories;
    const recipies = data.recipies;

    for (let key in categories) {
      catCtx.onAddCategories({
        id: key,
        name: categories[key].name,
        description: categories[key].description,
        image: categories[key].image,
      });
    }

    for (let key in recipies) {
      recCtx.onAddRecipies({
        id: key,
        name: recipies[key].name,
        category: recipies[key].category,
        ingredients: recipies[key].ingredients,
        price: recipies[key].price,
        image: recipies[key].image,
      });
    }
  }

  useEffect(() => {
    if (initial) {
      fetchData();
      initial = false;
    }
  }, []);

  return (
    <div className="w-[50rem] m-auto mt-10 flex justify-between gap-6">
      <Link
        className="border rounded-lg shadow-md p-3 min-h-36 min-w-52 max-h-36 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all"
        to="/categories"
      >
        <h1 className="font-medium text-lg text-gray-600">Categories</h1>
        <ul className="ml-5 pt-3">
          {catCtx.categories.map((c) => {
            return (
              <li className="mb-1" key={c.id}>
                {c.name}
              </li>
            );
          })}
        </ul>
      </Link>
      <Link
        className="border rounded-lg shadow-md p-3 min-h-36 min-w-52 max-h-36 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all"
        to="/recipies"
      >
        <h1 className="font-medium text-lg text-gray-600">Recipies</h1>
        <ul className="ml-5 pt-3">
          {recCtx.recipies.map((r) => {
            return (
              <li className="mb-1" key={r.id}>
                {r.name}
              </li>
            );
          })}
        </ul>
      </Link>
      <Link
        className="border rounded-lg shadow-md p-3 min-h-36 min-w-52 max-h-36 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all"
        to="/orders"
      >
        <h1 className="font-medium text-lg text-gray-600">Orders</h1>
      </Link>
    </div>
  );
}
