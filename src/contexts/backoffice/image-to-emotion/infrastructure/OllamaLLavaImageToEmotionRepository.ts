import { Ollama } from "@langchain/ollama";
import { Image } from "../domain/Image.js";
import { ImageToEmotion } from "../domain/ImageToEmotion.js";
import { ImageToEmotionRepository } from "../domain/ImageToEmotionRepository.js";


export class OllamaLlavaImageToEmotionRespository implements ImageToEmotionRepository {

  generate(image: Image): Promise<ImageToEmotion> {
    const llavaModel = new Ollama({
      model: "llava:13b",
      temperature : 0,
      topP : 0.1 
    });
    throw new Error("Method not implemented.");
  }

}