import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { createNotificationSlice, NotificationSliceType } from "./notificatonSlice";

export type FavoriteSliceType = {
    favorites : Recipe[],
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExists: (id: Recipe['idDrink']) => boolean
    loadFromLocalStorage: () => void
}

export const createFavoriteSlice : StateCreator<FavoriteSliceType & NotificationSliceType, [], [], FavoriteSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favoriteExists(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
           createNotificationSlice(set, get, api).showNotification({
                text: "Se eliminó correctamente de favoritos",
                error: false
            })
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
            createNotificationSlice(set, get, api).showNotification({
                text: "Se agregó correctamente a favoritos",
                error: false
            })
        }
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromLocalStorage: () => {
        const storeFavorites = localStorage.getItem('favorites')
        if(storeFavorites) {
            set({ favorites: JSON.parse(storeFavorites) })
        }
    }
})