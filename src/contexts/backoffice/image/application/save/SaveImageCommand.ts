import { Command } from "../../../../shared/domain/bus/command/Command.js";
import { Image } from "../../domain/Image.js";
import { ImagePrimitives } from "../../domain/ImagePrimitives.js";

export class SaveImageCommand implements Command{
  private constructor (private id:string, private path:string){}
  
  public static fromImagePrimitives(imagePrimitives:ImagePrimitives):SaveImageCommand {
    return new SaveImageCommand(imagePrimitives.id, imagePrimitives.path);
  }

  public getId():string{
    return this.id;
  }

  public getPath():string{
    return this.path;
  }

}