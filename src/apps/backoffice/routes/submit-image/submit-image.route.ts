import { Router, Request, Response } from "express";
import { SubmitImagePutController } from "../../controllers/submit-image/SubmitImagePutController.js";
import container from "../../dependency-injection/index.js";
import imageUploads from "../../middlewares/submit-image/submit-image.middleware.js";
export const register = (router:Router) => {
  const controller:SubmitImagePutController = container.get('backoffice.image.SubmitImagesCommandHandler');
  router.put(
    '/submit-image/:id',
    imageUploads.fields([{name:'gallery', maxCount:1}]), 
    (req: Request, res: Response) => controller.run(req, res));
}