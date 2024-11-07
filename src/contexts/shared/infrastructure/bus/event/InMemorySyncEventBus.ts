import { DomainEvent, DomainEventClass } from "../../../domain/bus/event/DomainEvent.js";
import { DomainEventSubscriber } from "../../../domain/bus/event/DomainEventSubscriber.js";
import { DomainEventSubscribers } from "../../../domain/bus/event/DomainEventSubscribers.js";
import { EventBus } from "../../../domain/bus/event/EventBus.js";

export class InMemorySyncEventBus extends Map<string, Array<DomainEventSubscriber<DomainEvent>>> implements EventBus {
  constructor() {
    super();
  }

  publish(events: Array<DomainEvent>): Promise<void> {
    events.forEach(event => {
      const subscribers:Array<DomainEventSubscriber<DomainEvent>> = super.get(event.eventName) || [];
      subscribers.forEach(subscriber => {
        subscriber.on(event); 
      });
    });
    return Promise.resolve();
  }

  addSubscribers(subscribers: DomainEventSubscribers): void {
    subscribers.getSubscribers().forEach(subscriber => {
      subscriber.subscribedTo().forEach(domainEvent => {
        const eventName:string = domainEvent.EVENT_NAME;
        const existingSubscribers:Array<DomainEventSubscriber<DomainEvent>> = super.get(eventName) || [];

        existingSubscribers.push(subscriber);
        super.set(eventName, existingSubscribers);
      });
    });
  }
}
