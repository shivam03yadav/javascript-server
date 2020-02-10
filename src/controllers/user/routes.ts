import { Router } from 'express';
import UserController from '../user/Controllers';
import authMoiddleWare from '../../libs/routes/authMiddleWare';
import validation from './validation';
import validationHandler from '../../libs/routes/validationHandler';

const UserRouter = Router();

UserRouter.route('/')
    .get(authMoiddleWare('getUsers', 'read'), validationHandler(validation.get), UserController.list)
    .post(authMoiddleWare('getUsers', 'read'), validationHandler(validation.create), UserController.create)
    .put(authMoiddleWare('getUsers', 'read'), validationHandler(validation.delete), UserController.update);
UserRouter.route('/:id')
    .delete(authMoiddleWare('getUsers', 'read'), validationHandler(validation.update), UserController.delete);
   UserRouter.route('/me')
    .get(authMoiddleWare('getUsers', 'read'), validationHandler(validation.get), UserController.me);

    export default UserRouter;