import { Image } from "../../../../../src/contexts/backoffice/image/domain/Image.js";
import { ImageIdMother } from "./ImageIdMother.js";
import { ImagePathMother } from "./ImagePathMother.js";

export class ImageMother {
  static create(uuid:string, path: string): Image {
    return new Image(
      ImageIdMother.create(uuid),
      ImagePathMother.create(path)
    );
  }
  static random():Image {
    return new Image(
      ImageIdMother.random(),
      ImagePathMother.random()
    );
  }
}