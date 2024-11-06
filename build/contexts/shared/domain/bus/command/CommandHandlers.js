import { CommandHandlerNotFOundException } from "./CommandHandlerNotFOundException.js";
export class CommandHandlers extends Map {
    constructor(commandHandlers) {
        super();
        commandHandlers.forEach(commandHandler => {
            this.set(commandHandler.subscribedTo(), commandHandler);
        });
    }
    getHandler(command) {
        const commandHandler = this.get(command.constructor);
        if (!commandHandler)
            throw new CommandHandlerNotFOundException(`Command hander for ${command.constructor} does not exist`);
        return commandHandler;
    }
}
