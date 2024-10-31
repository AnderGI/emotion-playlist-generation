import { Controller } from "../Controller.js";
import { Request, Response } from 'express';

export class StatusHealhCheckGetController implements Controller{
  constructor (){}
  public run(req: Request, res: Response): void {
    res.status(200).send();
  }
}