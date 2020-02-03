import { Router } from 'express';
import { default as TraineeController } from './Controllers';
import { default as validationHandler } from '../../libs/routes/validationHandler';
import validation from './validation';

const traineeRouter = Router();

traineeRouter.route('/')
    .get(TraineeController.list)
    .post(validationHandler(validation.create), TraineeController.create)
    .delete(TraineeController.delete);
traineeRouter.route('/:id')
    .put(TraineeController.update);

export default traineeRouter;
