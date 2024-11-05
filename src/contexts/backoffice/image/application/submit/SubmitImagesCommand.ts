import { Command } from "../../../../contexts/shared/domain/bus/command/Command.js";

export class SubmitImagesCommand implements Command{
  constructor (private imagePaths:string[]){}
}