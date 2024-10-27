import { EmotionName } from "./EmotionName.js";
import { UUID } from "../../../shared/domain/UUID.js";
import { Image } from "./Image.js";

export class ImageToEmotion {
  constructor(private readonly id:UUID, private readonly image:Image, private readonly emotionName:EmotionName) {
    
  }

  public idValue():string{
    return this.id.idValue();
  }

  public imageIdValue():string{
    return this.image.imageIddValue();
  }

  public emotionNameValue():string{
    return this.emotionName.emotionName();
  }


}