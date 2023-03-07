import { Router } from 'express';
import OrdersController from '../controllers/ordersController';
import productsIdsMiddleware from '../middlewares/productsIdsMiddleware';
import tokenAuth from '../middlewares/tokenMiddleware';

const router = Router();

const ordersController = new OrdersController();

router.get('/', (req, res) => ordersController.getAll(req, res));
router.post(
  '/',
  productsIdsMiddleware,
  tokenAuth,
  (req, res) => ordersController.createOrder(req, res),
);

export default router;