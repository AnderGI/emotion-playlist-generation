export class ValueObject {
    constructor(value) {
        this.value = value;
    }
    toString() {
        return this.value.toString();
    }
}
