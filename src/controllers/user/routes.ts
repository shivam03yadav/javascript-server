import { Router } from 'express';
import UserController from '../user/Controllers';
import authMoiddleWare from '../../libs/routes/authMiddleWare';
import validation from './validation';
import validationHandler from '../../libs/routes/validationHandler';

const UserRouter = Router();

/**
 * @swagger
 *
 *  definitions:
 *      Login:
 *        type: object
 *        properties:
 *          email:
 *              type: string
 *              example: shivam@successive.tech
 *          password:
 *              type: string
 *              example: Training@123
 *      Token:
 *           type: object
 *           properties:
 *               status:
 *                   example: Ok
 *               message:
 *                   example: Success
 *               data:
 *                    example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpbmF5LmNoYXVkaGFyeUBzdWNjZXNzaXZlLnRlY2giLCJfaWQiOiI1ZTQ1NDA0Mzk4ZTg2ZDU3NmFkOTY0ZTYiLCJpYXQiOjE1ODIxOTY2MjUsImV4cCI6MTU4MjE5NzUyNX0.sLT3-1NmeyJtS0eDjhO3SUDiVSgaizfX0R7sqPgG040
 */


/**
 * @swagger
 *
 * /api/user/me:
 *   get:
 *     description: Current user Details.
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: success
 *         schema:
 *             $ref: '#/definitions/TraineeResponse'
 */


UserRouter.route('/');
UserRouter.route('/me')
   .get(authMoiddleWare('getUsers', 'all'), validationHandler(validation.get), UserController.me);
/**
 * @swagger
 *
 * /api/user/login:
 *   post:
 *     description: Login Credentials
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: User email and password
 *         in: body
 *         required: true
 *         type: object
 *         schema:
 *             $ref: '#/definitions/Login'
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *              $ref: '#/definitions/Token'
 *       422:
 *         description: invalid email or password
 *         schema:
 *          oneOf:
 *          properties:
 *              status:
 *                  example: "Bad Request"
 *              message:
 *                  example: Password does not match
 *              err:
 *                  example: Password is incorrect
 */

UserRouter.route('/login')
   .post(UserController.login);
export default UserRouter;