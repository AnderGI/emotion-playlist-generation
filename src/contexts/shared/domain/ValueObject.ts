type Primitives = string | number | boolean | Date;
export abstract class ValueObject <T extends Primitives> {
  constructor (readonly value:T){}
  
  public toString():string {
    return this.value.toString();
  }

	public equals(other: ValueObject<T>): boolean {
		return other.constructor.name === this.constructor.name && other.value === this.value;
	}
}