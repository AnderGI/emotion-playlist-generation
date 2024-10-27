import { UUID } from "../../../shared/domain/UUID.js";
export class Image {
    id;
    constructor(id) {
        this.id = id;
    }
    static create(metadata) {
        return new Image(UUID.random());
    }
    imageIddValue() {
        return this.id.idValue();
    }
}
