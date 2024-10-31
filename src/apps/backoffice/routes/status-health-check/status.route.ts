import { StatusHealhCheckGetController } from "../../controllers/health-check/StatusHealhCheckGetController.js";
import { Router, Request, Response } from 'express';
import container from "../../dependency-injection/index.js";
export const register = (router:Router) => {
  const controller:StatusHealhCheckGetController = container.get('Apps.backoffice.controllers.StatusHealhCheckGetController');
  router.get('/status', (req: Request, res: Response) => controller.run(req, res));
}