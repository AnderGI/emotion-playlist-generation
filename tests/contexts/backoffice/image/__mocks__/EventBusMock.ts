import { jest } from "@jest/globals";
import { EventBus } from "../../../../../src/contexts/shared/domain/bus/event/EventBus";
import { DomainEvent } from "../../../../../src/contexts/shared/domain/bus/event/DomainEvent";
import { DomainEventSubscribers } from "../../../../../src/contexts/shared/domain/bus/event/DomainEventSubscribers";
import { ImageCreatedDomainEvent } from "../../../../../src/contexts/backoffice/image/domain/ImageCreatedDomainEvent";

export class EventBusMock implements EventBus{
  private publishMock:jest.Mock;
  
  constructor (){
    this.publishMock = jest.fn();
  }
  
  publish(events: Array<DomainEvent>): Promise<void> {
    this.publishMock(events)
  }
  addSubscribers(subscribers: DomainEventSubscribers): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async assertPublishHasBeenCalledWithEvents():Promise<void> {
    const imageCreatedDomainEvents:Array<ImageCreatedDomainEvent> = (this.publishMock as jest.Mock).mock.calls[0][0] as Array<ImageCreatedDomainEvent>;
    expect(this.publishMock).toHaveBeenCalledWith(imageCreatedDomainEvents)
    return Promise.resolve();
  }

}