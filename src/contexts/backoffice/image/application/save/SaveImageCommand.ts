import { Command } from "../../../../shared/domain/bus/command/Command.js";
import { Image } from "../../domain/Image.js";

export class SaveImageCommand implements Command{
  constructor (private id:string, private path:string){}
  
  public static fromImage(image:Image):SaveImageCommand {
    return new SaveImageCommand(image.getId(), image.getPath());
  }

  public getId():string{
    return this.id;
  }

  public getPath():string{
    return this.path;
  }

}