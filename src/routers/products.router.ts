import { Router } from 'express';
import ProductsController from '../controllers/productsController';
import productMiddleware from '../middlewares/productMiddleware';

const router = Router();

const productsController = new ProductsController();

router.post('/', productMiddleware, (req, res) => productsController.createProduct(req, res));
router.get('/', (req, res) => productsController.getAll(req, res));

export default router;