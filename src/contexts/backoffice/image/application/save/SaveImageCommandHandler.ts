import { Command } from "../../../../shared/domain/bus/command/Command.js";
import { CommandHandler } from "../../../../shared/domain/bus/command/CommandHandler.js";
import { ImageSaver } from "./ImageSaver.js";
import { SaveImageCommand } from "./SaveImageCommand.js";

export class SaveImageCommandHandler implements CommandHandler<SaveImageCommand>{
  constructor (private imageSaver:ImageSaver){}
  subscribedTo(): Command {
    return SaveImageCommand;
  }
  async handle(command: SaveImageCommand): Promise<void> {
    return this.imageSaver.run({
      id: command.getId(),
      path: command.getPath()
    })
  }
}