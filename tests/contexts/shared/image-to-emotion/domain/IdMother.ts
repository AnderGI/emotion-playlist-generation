import { Id } from '../../../src/image-to-emotion/domain/Id';

export class IdMother {
  static create(): Id {
    return Id.random();
  }
}