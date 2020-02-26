import { Router } from 'express';
import UserController from '../user/Controllers';
import authMoiddleWare from '../../libs/routes/authMiddleWare';
import validation from './validation';
import validationHandler from '../../libs/routes/validationHandler';

const UserRouter = Router();
UserRouter.route('/me')
   .get(authMoiddleWare('getUsers', 'all'), validationHandler(validation.get), UserController.me);
UserRouter.route('/login')
   .post(UserController.login);
export default UserRouter;