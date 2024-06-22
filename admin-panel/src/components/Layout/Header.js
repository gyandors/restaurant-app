import { useContext } from "react";
import { authContext } from "../../context/auth-context";
import { Link } from "react-router-dom";

export default function Header() {
  const authCtx = useContext(authContext);

  function handleLogout() {
    authCtx.onLogout();
  }

  return (
    <header>
      <nav className="bg-amber-200 px-4 py-2 flex justify-between items-center">
        <h1 className="text-2xl font-medium">
          <Link to="">Admin</Link>
        </h1>
        <button
          className="border border-transparent p-2 font-medium hover:border-black"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>
    </header>
  );
}
