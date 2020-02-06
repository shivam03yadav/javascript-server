import { Router } from 'express';
import { default as TraineeController } from './Controllers';
import { default as validationHandler } from '../../libs/routes/validationHandler';
import validation from './validation';

const traineeRouter = Router();
traineeRouter.route('/')
    .get(validationHandler(validation.get), TraineeController.list)
    .post(validationHandler(validation.create), TraineeController.create)
    .delete(validationHandler(validation.delete), TraineeController.delete);
    traineeRouter.route('/:id')
    .put(validationHandler(validation.update), TraineeController.update);
export default traineeRouter;