
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export default function Header() {
  
  const [searchFilters, setSearchFilters] = useState({
    ingredient: "",
    category: ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value
    })
  }
  
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  
  const fetchCategories = useAppStore((state) => state.fetchCategories)
  const searchRecipes = useAppStore((state) => state.searchRecipes)
  const categories = useAppStore((state) => state.categories)
  const showNotification = useAppStore((state) => state.showNotification)


  useEffect(() => {
    fetchCategories();
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    //TODO: Validar
    if(Object.values(searchFilters).some(value => value === "")) {
      showNotification({
        text: "Por favor complete todos los campos",
        error: true
      })
      return;
    }
    //Consultar recetas
    searchRecipes(searchFilters)
  };

  return (
    <header className = { isHome ? 'bg-header bg-cover bg-center' : 'bg-slate-800' }>
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="/logo.svg" alt="logotipo" />
          </div>

          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold uppercase"
                  : "text-white font-bold uppercase"
              }
            >
              Inicio
            </NavLink>

            <NavLink
              to="/favorite"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold uppercase"
                  : "text-white font-bold uppercase"
              }
            >
              Favoritos
            </NavLink>

              <NavLink
              to="/generate"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold uppercase"
                  : "text-white font-bold uppercase"
              }
            >
              Generar con IA
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form 
              className="md:w-1/2 2xl:w-1/3 bg-orange-400 rounded-lg my-32 p-10 space-y-6"
              onSubmit={handleSubmit}>
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Nombre o Ingredientes
              </label>
              <input
                id="ingredient"
                type="text"
                name="ingredient"
                placeholder="Nombre o Ingredientes"
                className="p-3 w-full rounded-lg focus:outline-none"
                value={searchFilters.ingredient}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-4">
              <label
                htmlFor="category"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Categoria
              </label>
              <select
                id="category"
                name="category"
                className="p-3 w-full rounded-lg focus:outline-none"
                value={searchFilters.category}
                onChange={handleChange}
              >
                <option value="">--- Seleccione ---</option>
                {categories.drinks.map((category) => (
                  <option 
                  key={category.strCategory} 
                  value={category.strCategory}
                  >{category.strCategory}</option>
                ))}
              </select>
              <input 
                type="submit" 
                value="Buscar Bebida" 
                className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold p-2  rounded-lg w-full uppercase" 
                />
            </div>
          </form>
        )}
      </div>
    </header>
  );
}
