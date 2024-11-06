import { Image } from "../../domain/Image.js";
export class ImageSaver {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async run(imagePrimitives) {
        const { id, path } = imagePrimitives;
        this.repository.save(Image.create(id, path));
        return Promise.resolve();
    }
}
