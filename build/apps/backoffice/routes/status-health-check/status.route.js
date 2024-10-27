import { StatusHealhCheckGetController } from "../../controller/health-check/StatusHealhCheckGetController.js";
export const register = (router) => {
    const controller = new StatusHealhCheckGetController();
    router.get('/status', (req, res) => controller.run(req, res));
};
