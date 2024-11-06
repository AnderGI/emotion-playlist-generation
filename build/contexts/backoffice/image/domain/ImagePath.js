import { StringValueObject } from "../../../shared/domain/StringValueObject.js";
export class ImagePath extends StringValueObject {
    constructor(value) {
        super(value);
    }
    getPath() {
        return this.value;
    }
}
