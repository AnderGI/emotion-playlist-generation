import { Request, Response } from "express";
import { Controller } from "../Controller.js";

export class SubmitImagePutController implements Controller{
  constructor (){}
  run(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }
}