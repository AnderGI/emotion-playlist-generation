import { validate } from "uuid";
import { InvalidIdException } from "./InvalidIdException.js";
import { randomUUID } from "crypto";
import { StringValueObject } from "./StringValueObject.js";

export class UUID extends StringValueObject {
  public constructor (value:string){
    super(value);
    this.ensureValidId(value);
  }

  public static random():UUID {
    return new UUID(randomUUID());
  }

  // como hacer para poder definir lanzamiento de excepcciones en ts
  private ensureValidId(value:string): void  {
    const valid:boolean = validate(value);
    if(!valid){
      throw new InvalidIdException(`Invalid uuid format for ${value}`);
    }
  }

  public idValue():string {
    return this.value;
  }
}