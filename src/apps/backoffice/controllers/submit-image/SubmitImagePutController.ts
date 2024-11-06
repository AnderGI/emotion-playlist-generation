import { Request, Response } from 'express';
import { CommandBus } from '../../../../contexts/shared/domain/bus/command/CommandBus.js';
import { SaveImageCommand } from '../../../../contexts/backoffice/image/application/save/SaveImageCommand.js';

export class SubmitImagePutController {
  constructor(private commandBus: CommandBus) {}

  run(req: Request, res: Response): void {
    // if (!req.file) res.status(400).send();
    // console.log(req.file)
    // const files = req.file as { [fieldname: string]: Express.Multer.File };

    // const images = files['gallery'];
    // if (!images || images.length <= 0) res.status(400).send();
    // const {id} = req.params
    // const command:SaveImageCommand = SaveImageCommand.fromImagePrimitives({
    //   id,
    //   path: images[0].path
    // });
    // this.commandBus.dispatch(command);

    res.status(201).send();
  }
}
