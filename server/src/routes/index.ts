import express from "express";

import PointsController from "../controllers/points";
import ItemsController from "../controllers/items";

const router = express.Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

router.get("/items", itemsController.index);

router.post("/points", pointsController.create);
router.get("/points", pointsController.index);
router.get("/points/:id", pointsController.show);

export default router;
