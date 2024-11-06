import { DomainEvent } from "./bus/event/DomainEvent.js";

export abstract class AggregateRoot {
  private events:Array<DomainEvent>;
  constructor (){
    this.events = []
  }

  record(event:DomainEvent):void {
    this.events.push(event);
  }

  pullDomainEvents():Array<DomainEvent> {
    const events:Array<DomainEvent> = this.events.slice()
    this.events = []
    return events;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  abstract toPrimitives(): any;

}