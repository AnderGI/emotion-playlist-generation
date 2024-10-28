import { Image } from "../../domain/Image.js";
export class ImageToEmotionConverter {
    constructor(repository) {
        this.repository = repository;
    }
    async convert() {
        const image = Image.create();
        return await this.repository.generate(image);
    }
}
