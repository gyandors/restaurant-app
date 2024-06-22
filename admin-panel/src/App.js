import { useContext } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { authContext } from "./context/auth-context";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import CategoriesPage from "./pages/CategoriesPage";
import RecipiesPage from "./pages/RecipiesPage";
import OrdersPage from "./pages/OrdersPage";

export default function App() {
  const authCtx = useContext(authContext);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/login"
          element={!authCtx.isLoggedIn ? <LoginPage /> : <Navigate to="/" />}
        />

        <Route
          path="/"
          element={authCtx.isLoggedIn ? <HomePage /> : <Navigate to="/login" />}
        >
          <Route path="" element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="recipies" element={<RecipiesPage />} />
          <Route path="orders" element={<OrdersPage />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}
