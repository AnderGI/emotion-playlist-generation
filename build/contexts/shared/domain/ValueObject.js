export class ValueObject {
    value;
    constructor(value) {
        this.value = value;
    }
    toString() {
        return this.value.toString();
    }
    equals(other) {
        return other.constructor.name === this.constructor.name && other.value === this.value;
    }
}
