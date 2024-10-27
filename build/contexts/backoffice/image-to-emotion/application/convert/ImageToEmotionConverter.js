import { Image } from "../../domain/Image.js";
export class ImageToEmotionConverter {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async convert(imageMetadata) {
        const image = Image.create(imageMetadata);
        return await this.repository.generate(image);
    }
}
