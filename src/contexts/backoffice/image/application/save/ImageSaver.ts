import { Image } from "../../domain/Image.js";
import { ImagePrimitives } from "../../domain/ImagePrimitives.js";
import { ImageRepository } from "../../domain/ImageRepository.js";

export class ImageSaver {
  constructor (private repository:ImageRepository){}

  async run(imagePrimitives:ImagePrimitives):Promise<void>{
    const {id, path}: {id:string, path:string} = imagePrimitives;
    this.repository.save(Image.create(id, path));
    return Promise.resolve();
  }
}