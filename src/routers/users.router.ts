import { Router } from 'express';
import UsersController from '../controllers/usersController';
import userMiddleware from '../middlewares/userMiddleware';

const router = Router();

const usersController = new UsersController();

router.post('/', userMiddleware, (req, res) => usersController.register(req, res));

export default router;