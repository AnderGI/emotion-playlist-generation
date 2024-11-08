import { Image } from "../../../../../../../src/contexts/backoffice/image/domain/Image";
import { InMemoryImageRepository } from "../../../../../../../src/contexts/backoffice/image/infrastructure/persistence/InMemoryImageRepository";
import { ImageIdMother } from "../../../domain/ImageIdMother";
import { ImageMother } from "../../../domain/ImageMother"

describe('InMemoryImageRepository', () => {
  it('should save an image', async () => {
    const image:Image = ImageMother.random();
    const repository:InMemoryImageRepository = new InMemoryImageRepository();
    await repository.save(image)
    const savedImage:Image | void = await repository.search(ImageIdMother.create(image.getId()));
    expect(image).toEqual(savedImage);
  })
})