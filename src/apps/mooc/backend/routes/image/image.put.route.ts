import { Request, Response, Router } from 'express';

import { ImagePutController } from '../../controllers/image/ImagePutController';
import container from '../../dependency-injection';

export const register = (router: Router): void => {
	const imagePutController = container.get<ImagePutController>(
		'Apps.mooc.controllers.ImagePutController'
	);
	router.put('/images/:id', (req: Request, res: Response) => imagePutController.run(req, res));
};
