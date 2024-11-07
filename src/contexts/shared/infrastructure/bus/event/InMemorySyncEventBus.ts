import { DomainEvent } from "../../../domain/bus/event/DomainEvent.js";
import { DomainEventSubscriber } from "../../../domain/bus/event/DomainEventSubscriber.js";
import { EventBus } from "../../../domain/bus/event/EventBus.js";
import { EventToSubscribers } from "../../../domain/bus/event/EventToSubscribers.js";

export class InMemorySyncEventBus implements EventBus {
  constructor() {}
  publish(events: Array<DomainEvent>): Promise<void> {
    throw new Error("Method not implemented.");
  }
  addSubscribers(subscribers: Array<DomainEventSubscriber<DomainEvent>>): void {
    throw new Error("Method not implemented.");
  }

}
