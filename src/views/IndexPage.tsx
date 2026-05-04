import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"


export default function IndexPage() {

  const drinks = useAppStore((state) => state.drinks)
  const hasDrinks = drinks.drinks.length > 0

  return (
     <>
      <h1 className="text-6xl font-extrabold text-center">Recetas</h1>
      {hasDrinks ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 ">
        {drinks.drinks.map((drink) => (
          <DrinkCard
            key={drink.idDrink}
            drink={drink}
          />
        ))}
        </div>
      ): (
        <p className="mt-10 text-center text-2xl">No hay recetas disponibles, utiliza el formulario para ver tus recetas favoritas</p>
      )}
     </>
  )
}
