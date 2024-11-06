import { Image } from "../../domain/Image.js";
import { ImageRepository } from "../../domain/ImageRepository.js";

export class InMemoryImageRepository implements ImageRepository{
  constructor (){}
  save(image: Image): Promise<void> {
    throw new Error("Method not implemented.");
  }
}