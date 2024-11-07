import { ImageSaver } from "../../../../../../src/contexts/backoffice/image/application/save/ImageSaver.js";
import { SaveImageCommandHandler } from "../../../../../../src/contexts/backoffice/image/application/save/SaveImageCommandHandler.js";
import { SaveImageCommand } from "../../../../../../src/contexts/backoffice/image/application/save/SaveImageCommand.js";
import { Image } from "../../../../../../src/contexts/backoffice/image/domain/Image.js";
import { ImageRepository } from "../../../../../../src/contexts/backoffice/image/domain/ImageRepository.js";
import { jest } from '@jest/globals'
import { ImageMother } from "../../domain/ImageMother.js";
import { ImagePath } from "../../../../../../src/contexts/backoffice/image/domain/ImagePath.js";
import { ImagePathMother } from "../../domain/ImagePathMother.js";
import { ImageId } from "../../../../../../src/contexts/backoffice/image/domain/ImageId.js";
import { ImageIdMother } from "../../domain/ImageIdMother.js";
import { DomainEvent } from "../../../../../../src/contexts/shared/domain/bus/event/DomainEvent.js";
import { EventBus } from "../../../../../../src/contexts/shared/domain/bus/event/EventBus.js";
import { ImageCreatedDomainEvent } from "../../../../../../src/contexts/backoffice/image/domain/ImageCreatedDomainEvent.js";
import { DomainEventSubscribers } from "../../../../../../src/contexts/shared/domain/bus/event/DomainEventSubscribers.js";
import { ImageRepositoryMock } from "../../__mocks__/ImageRepositoryMock.js";
import { EventBusMock } from "../../__mocks__/EventBusMock.js";

const givenAMockImageRepository = () => new ImageRepositoryMock()
const givenAMockEventBus = () => new EventBusMock();  
const givenAnImageSaver = (repository:ImageRepository, eventBus:EventBus) : ImageSaver => new ImageSaver(repository, eventBus)
const givenARandomImage = () : Image => ImageMother.random();
const givenASaveImageCommandFromImage = (image:Image) : SaveImageCommand => SaveImageCommand.fromImagePrimitives(image.toPrimitives()); 
const givenASaveImageCommandHandler = (saver:ImageSaver) : SaveImageCommandHandler => new SaveImageCommandHandler(saver);

describe('Image Saver', () => {
  let repository:ImageRepositoryMock; 
  let eventBus:EventBusMock;
  let saver:ImageSaver;
  let image:Image;
  let command:SaveImageCommand;
  let handler:SaveImageCommandHandler;

  beforeEach(() => {
    repository = givenAMockImageRepository() 
    eventBus = givenAMockEventBus();
    saver = givenAnImageSaver(repository, eventBus);
    image = givenARandomImage();
    command = givenASaveImageCommandFromImage(image);
    handler = givenASaveImageCommandHandler(saver);

  })
  
  it('Should save image', async () => {
    await handler.handle(command);
    
    repository.assertSaveHasBeenCalledWithImage();
    eventBus.assertPublishHasBeenCalledWithEvents();    
  })
})


