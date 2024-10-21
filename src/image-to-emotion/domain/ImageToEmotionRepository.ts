import { Image } from "./Image.js";
import { ImageToEmotion } from "./ImageToEmotion.js";

export interface ImageToEmotionRepository {
  generate(image:Image):Promise<ImageToEmotion>
}