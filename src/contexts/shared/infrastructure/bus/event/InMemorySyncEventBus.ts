import { DomainEvent } from "../../../domain/bus/event/DomainEvent.js";
import { EventBus } from "../../../domain/bus/event/EventBus.js";
import { EventToSubscribers } from "../../../domain/bus/event/EventToSubscribers.js";

export class InMemorySyncEventBus implements EventBus {
  constructor(private eventToSubscribers: EventToSubscribers) {}

  publish(events: Array<DomainEvent>): Promise<void> {
    events.forEach(event => {
      // Usar event.constructor para obtener la clase del evento
      const eventClass = event.constructor as typeof DomainEvent;
      const subscribers = this.eventToSubscribers.get(eventClass);

      if (subscribers) {
        subscribers.forEach(SubscriberClass => {
          const subscriberInstance = new SubscriberClass();
          subscriberInstance.on(event); // Llamar al método on del suscriptor
        });
      }
    });

    return Promise.resolve();
  }
}
