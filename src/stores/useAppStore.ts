import { create } from 'zustand'
import { createRecipeSlice, RecipesSliceType,  } from './recipeSlice'
import { devtools } from 'zustand/middleware'
import { createFavoriteSlice, FavoriteSliceType } from './favoriteSlice'
import { createNotificationSlice, NotificationSliceType} from './notificatonSlice'

export const useAppStore = create<RecipesSliceType & FavoriteSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a)
})))