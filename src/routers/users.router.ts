import { Router } from 'express';
// import ProductsController from '../controllers/productsController';
import UsersController from '../controllers/usersController';

const router = Router();

const usersController = new UsersController();

router.post('/', (req, res) => usersController.register(req, res));

export default router;