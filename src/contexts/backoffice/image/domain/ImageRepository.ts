import { Image } from "./Image.js";

export interface ImageRepository{
  save(image:Image):Promise<void>;
}