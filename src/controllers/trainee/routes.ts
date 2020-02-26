import { Router } from 'express';
import { default as TraineeController } from './Controllers';
import { default as validationHandler } from '../../libs/routes/validationHandler';
import authMoiddleWare from '../../libs/routes/authMiddleWare';
import validation from './validation';
const traineeRouter = Router();
traineeRouter.route('/')
    .get(authMoiddleWare('getUsers', 'read'), validationHandler(validation.get), TraineeController.list)
    .post(authMoiddleWare('getUsers', 'read'), validationHandler(validation.create), TraineeController.create)
    .delete(authMoiddleWare('getUsers', 'read'), validationHandler(validation.delete), TraineeController.delete);
traineeRouter.route('/:id')
    .put(authMoiddleWare('getUsers', 'read'), validationHandler(validation.update), TraineeController.update);
export default traineeRouter;