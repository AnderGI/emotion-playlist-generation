import { ImageSaver } from "../../../../../../src/contexts/backoffice/image/application/save/ImageSaver.js";
import { Image } from "../../../../../../src/contexts/backoffice/image/domain/Image.js";
import { ImageRepository } from "../../../../../../src/contexts/backoffice/image/domain/ImageRepository.js";
import { jest } from '@jest/globals'

describe('Image Saver', () => {
  it('Should save image', async () => {
    const repository:ImageRepository = {
      save: jest.fn((image:Image) => Promise.resolve())
    } 
    const saver:ImageSaver = new ImageSaver(repository)
    const image:Image = new Image("blabablbab")
    await saver.run("blabablbab");
    expect(repository.save).toHaveBeenCalled()
    expect(repository.save).toHaveBeenCalledWith(image)
    expect(repository.save).toHaveBeenCalledTimes(1)
  })
})