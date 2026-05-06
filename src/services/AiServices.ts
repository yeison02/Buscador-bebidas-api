import { streamText } from 'ai'
import openRouter from '../lib/ai'

export default {
    generateRecipe (prompt : string) {
        const result = streamText ({
            // model: openRouter('nvidia/nemotron-3-nano-30b-a3b:free'),
            // model: openRouter('meta-llama/llama-3.3-70b-instruct:free'),
            model: openRouter('openai/gpt-oss-20b:free'),
            prompt,
            system: 'Eres un bartender que tiene 50 años de experiencia y preparas las mejores bebidas del mundo',
            temperature: 1
        })
        return result.textStream
    }
}