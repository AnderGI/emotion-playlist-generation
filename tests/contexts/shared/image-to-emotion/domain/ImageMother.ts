import { Image } from "../../../../../src/contexts/backoffice/image-to-emotion/domain/Image.js";

export class ImageMother {
  static create(value: string): Image {
    return Image.create(value);
  }
}