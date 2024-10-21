import { Id } from "./Id.js";

export class Image {
  private constructor(private readonly id:Id, private readonly metadata:string){}

  public static create(metadata:string):Image {
    return new Image(Id.random(), metadata); 
  }

  public imageMetadata():string{
    return this.metadata;
  }
}