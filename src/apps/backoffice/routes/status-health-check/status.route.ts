import { StatusHealhCheckGetController } from "../../controller/health-check/StatusHealhCheckGetController.js";
import { Router, Request, Response } from 'express';
export const register = (router:Router) => {
  const controller: StatusHealhCheckGetController = new StatusHealhCheckGetController();
  router.get('/status', (req: Request, res: Response) => controller.run(req, res));
}