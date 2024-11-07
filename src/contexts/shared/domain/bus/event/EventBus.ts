import { DomainEvent } from "./DomainEvent.js";
import { DomainEventSubscriber } from "./DomainEventSubscriber.js";

export interface EventBus {
  publish(events: Array<DomainEvent>): Promise<void>;
  addSubscribers(subscribers: Array<DomainEventSubscriber<DomainEvent>>): void;
}