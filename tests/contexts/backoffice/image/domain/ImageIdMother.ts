import { ImageId } from "../../../../../src/contexts/backoffice/image/domain/ImageId";
import {faker} from '@faker-js/faker';
import { UUID } from "../../../../../src/contexts/shared/domain/UUID";

export class ImageIdMother {
  static create(value:string): ImageId {
    return new ImageId(value);
  }

  static random():ImageId{
    return new ImageId(UUID.random().toString())
  }
}