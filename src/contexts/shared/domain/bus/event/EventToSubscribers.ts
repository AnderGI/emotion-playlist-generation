import { TagImageToEmotionOnImageCreated } from "../../../../backoffice/imageToEmotion/application/tag/TagImageToEmotionOnImageCreated.js";
import { ImageCreatedDomainEvent } from "../../../../backoffice/image/domain/ImageCreatedDomainEvent.js";
import { DomainEvent, DomainEventClass } from "./DomainEvent.js";
import { DomainEventSubscriber } from "./DomainEventSubscriber.js";

// Definir el tipo para la clase de suscriptor
type DomainEventSubscriberClass = new () => DomainEventSubscriber<DomainEvent>;

// Clase que mapea eventos a sus suscriptores
export class EventToSubscribers extends Map<DomainEventClass, Array<DomainEventSubscriberClass>> {
  constructor() {
    super();

    // Asignar el evento y sus suscriptores
    this.set(ImageCreatedDomainEvent, [TagImageToEmotionOnImageCreated]);
  }
}
