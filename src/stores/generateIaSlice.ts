import { StateCreator } from "zustand";
import AiServices from "../services/AiServices";


export type AISliceType = {
    recipe: string,
    generateRecipe: (prompt: string) => Promise<void>
    isGenerate: boolean
}

export const createAISlice : StateCreator<AISliceType, [], [], AISliceType> = (set) => ({
   recipe: '',
   isGenerate: false,
   generateRecipe: async (prompt) => {
    set({recipe: '', isGenerate: true})
       const data = await AiServices.generateRecipe(prompt)
       
       for await (const textPart of data){
        set((state => ({
            recipe: state.recipe + textPart
        })))
       }
       set({
        isGenerate: false
       })
   },
})