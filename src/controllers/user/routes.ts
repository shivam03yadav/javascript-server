import { Router } from 'express';
import UserController from '../user/Controllers';

const UserRouter = Router();

UserRouter.route('/')
    .get(UserController.list)
    .post(UserController.create)
    .put(UserController.update);
UserRouter.route('/:id')
    .delete(UserController.delete);
export default UserRouter;