import { DomainEvent } from "./DomainEvent.js";
import { DomainEventSubscribers } from "./DomainEventSubscribers.js";

export interface EventBus {
  publish(events: Array<DomainEvent>): Promise<void>;
  addSubscribers(subscribers: DomainEventSubscribers): void;
}