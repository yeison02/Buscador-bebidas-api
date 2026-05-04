import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ModalRecipe from "../components/ModalRecipe";
import { useEffect } from "react";
import { useAppStore } from "../stores/useAppStore";
import Notification from "../components/Notification";

export default function Layout() {

  const loadFromLocalStorage = useAppStore((state) => state.loadFromLocalStorage);

  useEffect(() => {
    loadFromLocalStorage();
  }, [loadFromLocalStorage]);

  return (
    <>
      <Header />

      <main className="container mx-auto py-16">
        <Outlet />
      </main>
      <Notification />
      <ModalRecipe />
    </>
  );
}
