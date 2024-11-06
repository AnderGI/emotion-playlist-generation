export class InMemoryCommandBus {
    commandHandlers;
    constructor(commandHandlers) {
        this.commandHandlers = commandHandlers;
    }
    dispatch(command) {
        console.log(command);
        const commandHandler = this.commandHandlers.getHandler(command);
        commandHandler.handle(command);
    }
}
