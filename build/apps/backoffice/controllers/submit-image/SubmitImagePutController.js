import { SaveImageCommand } from '../../../../contexts/backoffice/image/application/save/SaveImageCommand.js';
export class SubmitImagePutController {
    commandBus;
    constructor(commandBus) {
        this.commandBus = commandBus;
    }
    run(req, res) {
        if (!req.files)
            res.status(400).send();
        const files = req.files;
        const images = files['gallery'];
        if (!images || images.length <= 0)
            res.status(400).send();
        const { id } = req.params;
        const command = SaveImageCommand.fromImagePrimitives({
            id,
            path: images[0].path
        });
        this.commandBus.dispatch(command);
        res.status(201).send();
    }
}
