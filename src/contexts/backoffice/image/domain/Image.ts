import { ImageId } from "./ImageId.js";
import { ImagePath } from "./ImagePath.js";
import { ImagePrimitives } from "./ImagePrimitives.js";

export class Image {

  constructor(private readonly id:ImageId, private path:ImagePath){}

  public static create(uuid:string, path:string):Image{
    return new Image(
      new ImageId(uuid),
      new ImagePath(path)
    );
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