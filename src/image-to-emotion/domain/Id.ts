import { validate } from "uuid";
import { InvalidIdException } from "./InvalidIdException.js";
import { DomainException } from "./DomainException.js";
import { randomUUID } from "crypto";

export class Id {
  private constructor (private readonly value:string){
    this.ensureValidId(value);
  }

  public static random():Id {
    return new Id(randomUUID());
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