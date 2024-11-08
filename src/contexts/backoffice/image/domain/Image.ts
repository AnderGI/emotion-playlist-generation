import { AggregateRoot } from "../../../shared/domain/AggregateRoot.js";
import { ImageCreatedDomainEvent } from "./ImageCreatedDomainEvent.js";
import { ImageId } from "./ImageId.js";
import { ImagePath } from "./ImagePath.js";
import { ImagePrimitives } from "./ImagePrimitives.js";

export class Image extends AggregateRoot{

  constructor(private readonly id:ImageId, private path:ImagePath){
    super();
  }

  public static create(uuid:string, path:string):Image{
    const image:Image = new Image(new ImageId(uuid),new ImagePath(path));
    image.record(ImageCreatedDomainEvent.fromPrimitives({
      aggregateId: image.getId(),
      attributes: {
        path: image.getPath()
      }}))
    return image; 
  }
   
  public static fromPrimitives(imagePrimitives:ImagePrimitives): Image {
    const {id, path} = imagePrimitives;
    const image:Image = new Image(new ImageId(id),new ImagePath(path));
    return image;
  }

  public toPrimitives():ImagePrimitives {
    return {
      id: this.getId(),
      path: this.getPath()
    }
  }

  public equals(other:Image):boolean{
    return this.id.value === other.id.value
  }

  public getId():string {
    return this.id.value;
  }

  public getPath():string {
    return this.path.value;
  }
}