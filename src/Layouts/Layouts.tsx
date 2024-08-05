import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout() {
  return (
    <>
      <NavBar />
      <header className="bg-gradient-to-r from-primary to-secondary">
        <Hero />
      </header>
      <main>
        <Outlet />
      </main>
      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
    </>
  );
}
