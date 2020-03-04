import traineeRouter from './controllers/trainee/routes';
import { Router } from 'express';
import UserRouter from './controllers/user/routes';

const mainRouter = Router();
mainRouter.use('/user', UserRouter);
mainRouter.use('/trainee', traineeRouter);
export default mainRouter;