import { Router } from 'express';
import { default as TraineeController } from './Controllers';

const traineeRouter = Router();

traineeRouter.route('/')
    .get(TraineeController.list)
    .post(TraineeController.create)
    .delete(TraineeController.delete);
traineeRouter.route('/:id')
    .put(TraineeController.update);

export default traineeRouter;
