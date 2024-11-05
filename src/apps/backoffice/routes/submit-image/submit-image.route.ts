import { Router, Request, Response } from "express";
import { SubmitImagePutController } from "../../controllers/submit-image/SubmitImagePutController.js";
import container from "../../dependency-injection/index.js";

export const register = (router:Router) => {
  const controller:SubmitImagePutController = container.get('Apps.backoffice.controllers.SubmitImagePutController');
  router.get('/submit-image', (req: Request, res: Response) => controller.run(req, res));
}