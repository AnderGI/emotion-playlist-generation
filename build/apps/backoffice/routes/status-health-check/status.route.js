import container from "../../dependency-injection/index.js";
export const register = (router) => {
    const controller = container.get('apps.backoffice.controllers.StatusHealhCheckGetController');
    router.get('/status', (req, res) => controller.run(req, res));
};
