export class ValueObject {
    value;
    constructor(value) {
        this.value = value;
    }
    toString() {
        return this.value.toString();
    }
}
