import express from 'express';

import PointsController from './controller/PointsController';
import ItemsController from './controller/ItemsController';

// index, show, create, update, delete
const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;