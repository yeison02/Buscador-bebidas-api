import { streamText } from 'ai'
import openRouter from '../lib/ai'

export default {
    generateRecipe (prompt : string) {
        const result = streamText ({
            model: openRouter('nvidia/nemotron-3-nano-30b-a3b:free'),
            prompt
        })
        return result.textStream
    }
}