export class EmotionName {
    value;
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
