import { Image } from "../../domain/Image.js";
import { ImageId } from "../../domain/ImageId.js";
import { ImagePrimitives } from "../../domain/ImagePrimitives.js";
import { ImageRepository } from "../../domain/ImageRepository.js";

export class InMemoryImageRepository
extends Map<string, ImagePrimitives> implements ImageRepository{
  constructor (){
    super()
  }
  async save(image: Image): Promise<void> {
    // upsert
    this.set(image.getId(), image.toPrimitives());
    return Promise.resolve();
  }

  search(imageId:ImageId) : Promise<Image | void> {
    const primitives:ImagePrimitives | undefined = this.get(imageId.idValue());
    if(!primitives) return Promise.resolve();
    const image:Image = Image.fromPrimitives(primitives);
    return Promise.resolve(image);
  }

}