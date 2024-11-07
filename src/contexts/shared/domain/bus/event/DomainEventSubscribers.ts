import { ContainerBuilder, Definition } from "node-dependency-injection";
import { DomainEvent } from "./DomainEvent.js";
import { DomainEventSubscriber } from "./DomainEventSubscriber.js";
import container from "../../../../../apps/backoffice/dependency-injection/index.js";

export class DomainEventSubscribers {
  private constructor (private subscribers:Array<DomainEventSubscriber<DomainEvent>>){}

  public static fromContainer(container:ContainerBuilder): DomainEventSubscribers {
    const subscriberDefinitions:Map<string, Definition> = container.findTaggedServiceIds('domainEventSusbcriber') as Map<string, Definition>
    const subscribers:Array<DomainEventSubscriber<DomainEvent>> = []
    subscriberDefinitions.forEach((value:Definition, key:string) => {
      const subscriber:DomainEventSubscriber<DomainEvent> = container.get<DomainEventSubscriber<DomainEvent>>(key.toString()) 
      subscribers.push(subscriber)
    })
    return new DomainEventSubscribers(subscribers);
  }

  public getSubscribers():Array<DomainEventSubscriber<DomainEvent>> {
    return this.subscribers;
  }
}