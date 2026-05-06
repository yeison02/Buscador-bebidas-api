import { StateCreator } from "zustand";
import AiServices from "../services/AiServices";


export type AISliceType = {
    recipe: string,
    generateRecipe: (prompt: string) => Promise<void>
}

export const createAISlice : StateCreator<AISliceType, [], [], AISliceType> = () => ({
   recipe: '',
   generateRecipe: async (prompt) => {
        await AiServices.generateRecipe(prompt)
   }
})