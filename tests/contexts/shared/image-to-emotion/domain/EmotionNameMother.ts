import {faker} from '@faker-js/faker';
import { EmotionName } from '../../../../../src/contexts/backoffice/image-to-emotion/domain/EmotionName.js';

export class EmotionNameMother {
  private static readonly emotions:string[] = ['rage', 'anger', 'anxiety', 'happiness', 'joy', 'curiosity'];
  static create(value?: string): EmotionName {
    return EmotionName.create(value ?? this.randomEmotion());
  }

  private static randomEmotion():string{   
    return faker.helpers.arrayElement(this.emotions);
  }
}