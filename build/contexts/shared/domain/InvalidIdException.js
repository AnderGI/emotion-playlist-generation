import { DomainException } from "./DomainException.js";
export class InvalidIdException extends DomainException {
    constructor(mssg) {
        super(mssg);
    }
}
