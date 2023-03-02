import { Router } from 'express';
import ProductsController from '../controllers/productsController';

const router = Router();

const productsController = new ProductsController();

router.post('/', (req, res) => productsController.createProduct(req, res));
router.get('/', (req, res) => productsController.getAll(req, res));

export default router;