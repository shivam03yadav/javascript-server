import traineeRouter from './controllers/trainee/routes';
import { Router } from 'express';

const mainRouter = Router();
mainRouter.use('/user', traineeRouter);

export default mainRouter;