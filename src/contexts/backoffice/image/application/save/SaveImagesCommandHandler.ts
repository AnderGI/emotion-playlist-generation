import { Command } from "../../../../shared/domain/bus/command/Command.js";
import { CommandHandler } from "../../../../shared/domain/bus/command/CommandHandler.js";
import { SubmitImagesCommand } from "./SaveImagesCommand.js";

export class SubmitImagesCommandHandler implements CommandHandler<SubmitImagesCommand>{
  constructor (){}
  subscribedTo(): Command {
    return SubmitImagesCommand;
  }
  async handle(command: SubmitImagesCommand): Promise<void> {
    return Promise.resolve();
  }
}