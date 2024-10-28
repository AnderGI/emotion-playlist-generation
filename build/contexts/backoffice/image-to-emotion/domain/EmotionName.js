export class EmotionName {
    constructor(value) {
        this.value = value;
    }
    emotionName() {
        return this.value;
    }
    static create(value) {
        return new EmotionName(value);
    }
}
