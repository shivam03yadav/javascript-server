import { Router } from 'express';
import { default as TraineeController } from './Controllers';
import { default as validationHandler } from '../../libs/routes/validationHandler';
import authMoiddleWare from '../../libs/routes/authMiddleWare';
import validation from './validation';

const traineeRouter = Router();
traineeRouter.route('/')
    .get(authMoiddleWare('getUsers', 'read'), validationHandler(validation.get), TraineeController.list)
    .post(authMoiddleWare('getUsers', 'write'), validationHandler(validation.create), TraineeController.create)
    .put(authMoiddleWare('getUsers', 'write'), validationHandler(validation.update), TraineeController.update);
    traineeRouter.route('/:id')
    .delete(authMoiddleWare('getUsers', 'delete'), validationHandler(validation.delete), TraineeController.delete);

export default traineeRouter;
