import { ImagePath } from "../../../../../src/contexts/backoffice/image/domain/ImagePath.js";
import {faker} from '@faker-js/faker';

export class ImagePathMother {
  static create(value: string): ImagePath {
    return new ImagePath(value);
  }
  static random(): ImagePath {
    return new ImagePath(faker.system.directoryPath());
  }

}