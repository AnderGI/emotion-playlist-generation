import { EmotionName } from '../../../src/image-to-emotion/domain/EmotionName';
import {faker, type Faker} from '@faker-js/faker';
export class EmotionNameMother {
  private static readonly emotions:string[] = ['rage', 'anger', 'anxiety', 'happiness', 'joy', 'curiosity'];
  static create(value?: string): EmotionName {
    return EmotionName.create(value ?? this.randomEmotion());
  }

  private static randomEmotion():string{   
    return faker.helpers.arrayElement(this.emotions);
  }
}