import { UUID } from "../../../shared/domain/UUID.js";

export class Image {
  private constructor(private readonly id:UUID){}

  public static create():Image {
    return new Image(UUID.random()); 
  }

  public imageIddValue():string{
    return this.id.idValue();
  }
}