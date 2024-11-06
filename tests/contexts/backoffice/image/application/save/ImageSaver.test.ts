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

describe('Image Saver', () => {
  const givenAMockImageRepository = (): ImageRepository => ({save: jest.fn((image: Image) => Promise.resolve())})
  const givenAnImageSaver = (repository:ImageRepository) : ImageSaver => new ImageSaver(repository)
  const givenARandomImage = () : Image => ImageMother.random();
  const givenASaveImageCommandFromImage = (image:Image) : SaveImageCommand => SaveImageCommand.fromImage(image); 
  const givenASaveImageCommandHandler = (saver:ImageSaver) : SaveImageCommandHandler => new SaveImageCommandHandler(saver);


  it('Should save image', async () => {
    const repository:ImageRepository = givenAMockImageRepository() 
    const saver:ImageSaver = givenAnImageSaver(repository)
    const image:Image = givenARandomImage();
    const command:SaveImageCommand = givenASaveImageCommandFromImage(image);
    const handler:SaveImageCommandHandler = givenASaveImageCommandHandler(saver);

    await handler.handle(command);
    
    expect(repository.save).toHaveBeenCalled()
    const createdImage:Image = (repository.save as jest.Mock).mock.calls[0][0] as Image; 
    expect(repository.save).toHaveBeenCalledWith(createdImage)
    expect(repository.save).toHaveBeenCalledTimes(1)
  })
})


