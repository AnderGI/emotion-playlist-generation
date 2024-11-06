import { DomainEventClass } from "../../../../shared/domain/bus/event/DomainEvent.js";
import { DomainEventSubscriber } from "../../../../shared/domain/bus/event/DomainEventSubscriber.js";
import { ImageCreatedDomainEvent } from "../../../image/domain/ImageCreatedDomainEvent.js";

export class TagImageToEmotionOnImageCreated implements DomainEventSubscriber<ImageCreatedDomainEvent>{
  constructor (){}
  subscribedTo(): Array<DomainEventClass> {
    throw new Error("Method not implemented.");
  }
  on(domainEvent: ImageCreatedDomainEvent): Promise<void> {
    throw new Error("Method not implemented.");
  }
}