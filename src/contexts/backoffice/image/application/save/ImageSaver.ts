import { Image } from "../../domain/Image.js";
import { ImageRepository } from "../../domain/ImageRepository.js";

export class ImageSaver {
  constructor (private repository:ImageRepository){}

  async run(path:string):Promise<void>{
    this.repository.save(new Image(path));
    return Promise.resolve();
  }
}