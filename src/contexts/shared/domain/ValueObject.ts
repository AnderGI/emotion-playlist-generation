type Primitives = string | number | boolean | Date;
export abstract class ValueObject <T extends Primitives> {
  constructor (readonly value:T){

  }

  public toString():string {
    return this.value.toString();
  }

}