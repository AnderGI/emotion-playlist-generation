import { ImageId } from "./ImageId.js";
import { ImagePath } from "./ImagePath.js";
export class Image {
    id;
    path;
    constructor(id, path) {
        this.id = id;
        this.path = path;
    }
    static create(uuid, path) {
        return new Image(new ImageId(uuid), new ImagePath(path));
    }
    toPrimitives() {
        return {
            id: this.getId(),
            path: this.getPath()
        };
    }
    equals(other) {
        return this.id.value === other.id.value;
    }
    getId() {
        return this.id.value;
    }
    getPath() {
        return this.path.value;
    }
}
