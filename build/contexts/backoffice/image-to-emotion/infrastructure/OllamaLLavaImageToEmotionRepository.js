import { Ollama } from "@langchain/ollama";
export class OllamaLlavaImageToEmotionRespository {
    generate(image) {
        const llavaModel = new Ollama({
            model: "llava:13b",
            temperature: 0,
            topP: 0.1
        });
        throw new Error("Method not implemented.");
    }
}
