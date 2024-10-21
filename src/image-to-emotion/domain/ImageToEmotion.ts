import { EmotionName } from "./EmotionName.js";
import { Id } from "./Id.js";
import { Image } from "./Image.js";

export class ImageToEmotion {
  constructor(private readonly id:Id, private readonly image:Image, private readonly emotionName:EmotionName) {
    
  }

  public idValue():string{
    return this.id.idValue();
  }

  public imageMetadataValue():string{
    return this.image.imageMetadata();
  }

  public emotionNameValue():string{
    return this.emotionName.emotionName();
  }


}