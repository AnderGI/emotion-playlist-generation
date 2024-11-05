import { Command } from "./Command.js";

export interface CommandBus {
  dispatch(command:Command):void;
}