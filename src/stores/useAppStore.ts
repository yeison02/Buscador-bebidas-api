import { create } from 'zustand'
import { createRecipeSlice, RecipesSliceType,  } from './recipeSlice'
import { devtools } from 'zustand/middleware'
import { createFavoriteSlice, FavoriteSliceType } from './favoriteSlice'
import { createNotificationSlice, NotificationSliceType} from './notificatonSlice'
import { createAISlice, GenerateIaSliceType } from './generateIaSlice'

export const useAppStore = create<RecipesSliceType & FavoriteSliceType & NotificationSliceType & GenerateIaSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a)
})))