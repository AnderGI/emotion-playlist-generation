export class SaveImageCommand {
    id;
    path;
    constructor(id, path) {
        this.id = id;
        this.path = path;
    }
    static fromImagePrimitives(imagePrimitives) {
        return new SaveImageCommand(imagePrimitives.id, imagePrimitives.path);
    }
    getId() {
        return this.id;
    }
    getPath() {
        return this.path;
    }
}
