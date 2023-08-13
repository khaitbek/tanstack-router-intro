import { Outlet } from "@tanstack/react-router";
import { Navbar } from "../components";

export function RootLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
