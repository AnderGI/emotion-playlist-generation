import { Command } from "../../../../shared/domain/bus/command/Command.js";

export class SubmitImagesCommand implements Command{
  constructor (private imagePaths:string[]){}
}