import { DomainEvent } from "../../../shared/domain/bus/event/DomainEvent.js";

type ImageCreatedDomainEventAttributes = {
  readonly path: string;
};


export class ImageCreatedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME: string = "agi.contexts.backoffice.event.image.image_created.0";
  readonly path: string;

  constructor({
    aggregateId,
    path,
    eventId,
    occurredOn
  }: {
    aggregateId: string;
    eventId?: string;
    path: string;
    occurredOn?: Date;
  }) {
    super({ eventName: ImageCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn });
    this.path = path;
  }

  toPrimitives(): ImageCreatedDomainEventAttributes {
    const { path } = this;
    return {
      path
    };
  }

  static fromPrimitives(params: {
    aggregateId: string;
    attributes: ImageCreatedDomainEventAttributes;
    eventId?: string;
    occurredOn?: Date;
  }): DomainEvent {
    const { aggregateId, attributes, occurredOn, eventId } = params;
    return new ImageCreatedDomainEvent({
      aggregateId,
      path: attributes.path,
      eventId,
      occurredOn
    });
  }
}


