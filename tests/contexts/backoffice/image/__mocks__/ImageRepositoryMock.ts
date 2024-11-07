import { Image } from "../../../../../src/contexts/backoffice/image/domain/Image";
import { ImageRepository } from "../../../../../src/contexts/backoffice/image/domain/ImageRepository";
import { jest } from "@jest/globals";
export class ImageRepositoryMock implements ImageRepository{
  private saveMock:jest.Mock;
  constructor (){
    this.saveMock = jest.fn();
  }
  async save(image: Image): Promise<void> {
    this.saveMock(image)
    return Promise.resolve();
  }

  public assertSaveHasBeenCalledWithImage():void{
    const createdImage:Image = (this.saveMock as jest.Mock).mock.calls[0][0] as Image; 
    expect(this.saveMock).toHaveBeenCalledWith(createdImage)
  }

}