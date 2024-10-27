export class EmotionName {
  constructor(private readonly value:string){

  }
  public emotionName():string{
    return this.value;
  }

  public static create(value:string):EmotionName{
    return new EmotionName(value);
  }
}