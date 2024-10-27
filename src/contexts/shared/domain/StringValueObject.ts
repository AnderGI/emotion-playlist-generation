import { ValueObject } from "./ValueObject.js";

export class StringValueObject extends ValueObject<string> {
  constructor (value:string) {
    super(value);
  }
}