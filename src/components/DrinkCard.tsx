import { Drink } from "../types"
import { useAppStore } from "../stores/useAppStore"

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({ drink }: DrinkCardProps) {

  const selectRecipe = useAppStore((state) => state.selectRecipe)  

  return (
      <div className="border border-gray-300 rounded-lg shadow-lg m-5 ">
        <div className="overflow-hidden">
          <img 
            className="hover:scale-95 transition-transform rounded-lg duration-500"
            src={drink.strDrinkThumb}   
            alt={`Imagen de ${drink.strDrink}`} 
          />
        </div>
           
        <div className="p-5">
           <h2
              className="text-2xl font-black mt-4 truncate">
              {drink.strDrink}
            </h2>
            <button
              type="button"
              onClick={() => selectRecipe(drink.idDrink)}
              className="bg-orange-400 hover:bg-orange-500 text-white mt-5 font-bold p-3 rounded w-full text-lg">
              Ver Receta
            </button>
        </div>
      </div>
  )
}
