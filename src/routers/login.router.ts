import { Router } from 'express';
import LoginController from '../controllers/loginController';
import loginInputValidate from '../middlewares/loginInputValidation';

const router = Router();

const loginController = new LoginController();

// router.post('/', (req, res) => loginInputValidate, loginController.login(req, res));
router.post('/', loginInputValidate, loginController.login);

export default router;