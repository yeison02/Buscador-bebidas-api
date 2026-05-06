import { StateCreator } from "zustand";
import AiServices from "../services/AiServices";


export type AISliceType = {
    recipe: string,
    generateRecipe: (prompt: string) => Promise<void>
}

export const createAISlice : StateCreator<AISliceType, [], [], AISliceType> = (set) => ({
   recipe: '',
   generateRecipe: async (prompt) => {
       const data =  await AiServices.generateRecipe(prompt)
       
       for await (const textPart of data){
        set((state => ({
            recipe: state.recipe + textPart
        })))
       }
   }
})