import { SaveImageCommand } from "./SaveImageCommand.js";
export class SaveImageCommandHandler {
    imageSaver;
    constructor(imageSaver) {
        this.imageSaver = imageSaver;
    }
    subscribedTo() {
        return SaveImageCommand;
    }
    async handle(command) {
        return this.imageSaver.run({
            id: command.getId(),
            path: command.getPath()
        });
    }
}
