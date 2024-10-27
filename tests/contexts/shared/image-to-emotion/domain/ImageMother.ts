import { Image } from '../../../src/image-to-emotion/domain/Image';
import {faker, type Faker} from '@faker-js/faker';

export class ImageMother {
  static create(value?: string): Image {
    return new Image(value ?? faker.);
  }
}