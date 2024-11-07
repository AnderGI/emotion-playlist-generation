import { DomainEventClass } from "../../../../shared/domain/bus/event/DomainEvent.js";
import { DomainEventSubscriber } from "../../../../shared/domain/bus/event/DomainEventSubscriber.js";
import { ImageCreatedDomainEvent } from "../../../image/domain/ImageCreatedDomainEvent.js";

export class TagImageToEmotionOnImageCreated implements DomainEventSubscriber<ImageCreatedDomainEvent> {
  constructor() {}

  // Especifica a qué eventos se suscribe este manejador
  subscribedTo(): Array<DomainEventClass> {
    return [ImageCreatedDomainEvent]; // Suscribirse a ImageCreatedDomainEvent
  }

  // Define la lógica para manejar el evento
  async on(domainEvent: ImageCreatedDomainEvent): Promise<void> {
    // Aquí es donde implementas la lógica para manejar el evento
    console.log("Handling ImageCreatedDomainEvent:", domainEvent);
    // Puedes realizar tareas como etiquetar la imagen con emociones aquí
  }
}
