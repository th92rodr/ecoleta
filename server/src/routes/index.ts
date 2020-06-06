import express from 'express';
import multer from 'multer';

import multerConfig from '../config/multer';

import PointsController from '../controllers/points';
import ItemsController from '../controllers/items';

const router = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

router.get('/items', itemsController.index);

router.get('/points', pointsController.index);
router.get('/points/:id', pointsController.show);

router.post('/points', upload.single('image'), pointsController.create);

export default router;
