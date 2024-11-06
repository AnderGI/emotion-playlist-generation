import { ImageId } from "../../../../../src/contexts/backoffice/image/domain/ImageId";
import {faker} from '@faker-js/faker';

export class ImageIdMother {
  static create(value:string): ImageId {
    return new ImageId(value);
  }

  static random():ImageId{
    return new ImageId(faker.string.uuid())
  }
}