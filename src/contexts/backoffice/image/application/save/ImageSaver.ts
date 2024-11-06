import { EventBus } from "../../../../shared/domain/bus/event/EventBus.js";
import { Image } from "../../domain/Image.js";
import { ImagePrimitives } from "../../domain/ImagePrimitives.js";
import { ImageRepository } from "../../domain/ImageRepository.js";

export class ImageSaver {
  constructor (private repository:ImageRepository, private eventBus:EventBus){}

  async run(imagePrimitives:ImagePrimitives):Promise<void>{
    const {id, path}: {id:string, path:string} = imagePrimitives;
    const image:Image = Image.create(id, path);
    this.repository.save(image);
    this.eventBus.publish(image.pullDomainEvents());
    return Promise.resolve();
  }
}