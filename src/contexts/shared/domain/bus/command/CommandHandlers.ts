import { Command } from "./Command.js";
import { CommandHandler } from "./CommandHandler.js";
import { CommandHandlerNotFOundException } from "./CommandHandlerNotFOundException.js";

export class CommandHandlers extends Map<Command, CommandHandler<Command>>{
  
  constructor (commandHandlers:Array<CommandHandler<Command>>){
    super();
    commandHandlers.forEach(commandHandler => {
      this.set(commandHandler.subscribedTo(), commandHandler);
    })
  }

  public getHandler(command:Command):CommandHandler<Command> {
    const commandHandler:CommandHandler<Command> | undefined = this.get(command.constructor);
    if(!commandHandler) throw new CommandHandlerNotFOundException(`Command hander for ${command.constructor} does not exist`); 
    return commandHandler;
  }
}