import { Router } from 'express';
import OrdersController from '../controllers/ordersController';

const router = Router();

const ordersController = new OrdersController();

router.get('/', (req, res) => ordersController.getAll(req, res));

export default router;