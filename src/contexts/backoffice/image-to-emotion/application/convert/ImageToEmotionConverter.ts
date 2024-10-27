import { Image } from "../../domain/Image.js";
import { ImageToEmotion } from "../../domain/ImageToEmotion.js";
import { ImageToEmotionRepository } from "../../domain/ImageToEmotionRepository.js";



export class ImageToEmotionConverter {
  constructor(private repository: ImageToEmotionRepository) { }

  public async convert(): Promise<ImageToEmotion> {
    const image: Image = Image.create();
    return await this.repository.generate(image);
  }

  
}
