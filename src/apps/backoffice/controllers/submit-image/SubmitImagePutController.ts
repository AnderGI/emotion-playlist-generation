import { Request, Response } from 'express';
import { CommandBus } from '../../../../contexts/shared/domain/bus/command/CommandBus.js';
import { SubmitImagesCommand } from '../../../../contexts/backoffice/image/application/submit/SubmitImagesCommand.js';

export class SubmitImagePutController {
  constructor(private commandBus: CommandBus) {}

  run(req: Request, res: Response): void {
    if (!req.files) res.status(400).send();
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    const images = files['gallery'];
    if (!images || images.length <= 0) res.status(400).send();
    
    const command:SubmitImagesCommand = new SubmitImagesCommand(images.map(image => image.path));
    this.commandBus.dispatch(command);

    res.status(201).send();
  }
}
