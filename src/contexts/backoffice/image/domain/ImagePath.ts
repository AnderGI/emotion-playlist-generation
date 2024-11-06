import { StringValueObject } from "../../../shared/domain/StringValueObject.js";

export class ImagePath extends StringValueObject{
  constructor (value:string){
    super(value);  
  }

  public getPath():string{
    return this.value;
  }

  
}