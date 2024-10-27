import { UUID } from "../../../shared/domain/UUID.js";
export class Image {
    id;
    constructor(id) {
        this.id = id;
    }
    static create() {
        return new Image(UUID.random());
    }
    imageIddValue() {
        return this.id.idValue();
    }
}
