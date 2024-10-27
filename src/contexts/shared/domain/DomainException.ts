export abstract class DomainException extends Error{
  constructor(mssg:string){
    super(mssg);
  }
}

