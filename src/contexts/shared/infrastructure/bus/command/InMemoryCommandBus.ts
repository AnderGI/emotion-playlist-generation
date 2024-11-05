import { Command } from "../../../../contexts/shared/domain/bus/command/Command.js";
import { CommandBus } from "../../../../contexts/shared/domain/bus/command/CommandBus.js";
import { CommandHandler } from "../../../../contexts/shared/domain/bus/command/CommandHandler.js";
import { CommandHandlers } from "../../../../contexts/shared/domain/bus/command/CommandHandlers.js";

export class InMemoryCommandBus implements CommandBus{
  constructor (private commandHandlers:CommandHandlers){}
  dispatch(command: Command): void {
    console.log(command)
    const commandHandler:CommandHandler<Command> = this.commandHandlers.getHandler(command);
    // if handler does not exist exception will be propagated
    commandHandler.handle(command);
  }
}