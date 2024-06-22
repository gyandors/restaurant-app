import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="m-24 flex justify-between gap-6">
      <Link
        className="border rounded-lg shadow-md p-3 min-h-36 min-w-52"
        to="/categories"
      >
        <h1 className="font-medium text-lg">Categories</h1>
      </Link>
      <Link
        className="border rounded-lg shadow-md p-3 min-h-36 min-w-52"
        to="/recipies"
      >
        <h1 className="font-medium text-lg">Recipies</h1>
      </Link>
      <Link
        className="border rounded-lg shadow-md p-3 min-h-36 min-w-52"
        to="/orders"
      >
        <h1 className="font-medium text-lg">Orders</h1>
      </Link>
    </div>
  );
}
