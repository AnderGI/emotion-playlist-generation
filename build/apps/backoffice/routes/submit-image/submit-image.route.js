import container from "../../dependency-injection/index.js";
import imageUploads from "../../middlewares/submit-image/submit-image.middleware.js";
export const register = (router) => {
    const controller = container.get('backoffice.image.SubmitImagesCommandHandler');
    router.put('/submit-image/:id', imageUploads.fields([{ name: 'gallery', maxCount: 1 }]), (req, res) => controller.run(req, res));
};
