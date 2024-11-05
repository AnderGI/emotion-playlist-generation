export class CommandHandlerNotFOundException extends Error{
  constructor (mssg:string){
    super(mssg);
  }
}