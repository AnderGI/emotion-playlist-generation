import { validate } from "uuid";
import { InvalidIdException } from "./InvalidIdException.js";
import { randomUUID } from "crypto";
import { StringValueObject } from "./StringValueObject.js";
export class UUID extends StringValueObject {
    constructor(value) {
        super(value);
        this.ensureValidId(value);
    }
    static random() {
        return new UUID(randomUUID());
    }
    // como hacer para poder definir lanzamiento de excepcciones en ts
    ensureValidId(value) {
        const valid = validate(value);
        if (!valid) {
            throw new InvalidIdException(`Invalid uuid format for ${value}`);
        }
    }
    idValue() {
        return this.value;
    }
}
