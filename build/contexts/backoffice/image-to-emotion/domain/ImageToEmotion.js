export class ImageToEmotion {
    constructor(id, image, emotionName) {
        this.id = id;
        this.image = image;
        this.emotionName = emotionName;
    }
    idValue() {
        return this.id.idValue();
    }
    imageIdValue() {
        return this.image.imageIddValue();
    }
    emotionNameValue() {
        return this.emotionName.emotionName();
    }
}
