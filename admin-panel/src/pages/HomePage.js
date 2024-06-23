import { Outlet } from "react-router-dom";

import Header from "../components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
