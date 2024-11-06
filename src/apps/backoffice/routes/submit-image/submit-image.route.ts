import { Router, Request, Response } from "express";
import { SubmitImagePutController } from "../../controllers/submit-image/SubmitImagePutController.js";
import container from "../../dependency-injection/index.js";
import imageUploads from "../../middlewares/submit-image/submit-image.middleware.js";
export const register = (router:Router) => {
  const controller:SubmitImagePutController = container.get('apps.backoffice.controllers.SubmitImagePutController');
  router.put(
    '/submit-image/:id',
    imageUploads.single('gallery'), 
    (req: Request, res: Response) => controller.run(req, res));
}