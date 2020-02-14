import { Request, Response } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import SystemResponse from '../../libs/SystemResponse';
import * as bcrypt from 'bcrypt';
import config from '../../config/configuration';
import * as jwt from 'jsonwebtoken';

class UserController {
    static instance: any;
    private userRepository: UserRepository = new UserRepository();
    static getInstance() {

        if (UserController.instance) {
            return UserController.instance;
        }

        UserController.instance = new UserController();
        return UserController.instance;
    }

    login = async (req: any, res: Response, next: any) => {
        try {
            const { email, password } = req.body;
            const user = await this.userRepository.findOne({ email });
            if (!user) {
                return next({
                    error: 'User not found',
                    status: 404
                });
            }
            const result = await bcrypt.compare(password, user.password);
            console.log('Result is ', result);
            if (!result) {
                return next({
                    error: 'Password didnt match',
                    status: 422
                });
            }
            console.log('Password matched');
            const token = jwt.sign({ email: user.email, id: user.originalId }, config.secretKey);
            res.status(200).send({
                message: 'Login Successful',
                data: token,
                status: 'Success'
            });
        } catch (err) {
            next({ error: err.message });
        }
    }

    me = (req, res: Response, next) => {
        try {
            return SystemResponse.success(res, req.user, 'user Details fetched successfully');
        } catch (err) {
            // throw error
        }
    }

    create = async (req: Request, res: Response) => {

        console.log(':::::::::::::::::::CREATE USER:::::::::::::::::::');
        try {
            const userData = req.body;
            const userId = req.user._id;
            const user = await this.userRepository.create(userData, userId);
            if (user) {
                return SystemResponse.success(res, user, 'User Added Successfully');
            }
        }
        catch (error) {
            return SystemResponse.error(res, error.message, 'User Added UnSuccessfull');
        }
    }

    update = async(req: Request, res: Response) => {
        console.log(':::::::::::::::::::UPDATE USER:::::::::::::::::::');
     try {
        const userData = req.body;
        const userId = req.user._id;
        const user = await this.userRepository.update(userData.id, userData.dataToUpdate, userId);
            if (user) {
                return SystemResponse.success(res, user, 'User Updated Successfully');
            }
        }
            catch (error) {
                return SystemResponse.error(res, error, 'User Updated UnSuccessfull');
            }
    }
    list = async (req: Request, res: Response) => {
        console.log(':::::::::::::::::::USER LIST::::::::::::::::::::');
      try {
       const user = await this.userRepository.list();
            if (user) {
                return SystemResponse.success(res, user, 'List Of Users');
            }
        }

            catch (error) {
                return SystemResponse.error(res, error, 'No List Exist');
            }
    }
    delete = async (req: Request, res: Response) => {
        console.log(':::::::::::::::::::Delete USER:::::::::::::::::::');
     try {
        const userData = req.params;
        const userId = req.user._id;
       const user: any = await this.userRepository.delete(userData.id, userId);

            if (user) {
                return SystemResponse.success(res, user, 'User Deleted Successfully');
            }
        }
            catch (error) {
                return SystemResponse.error(res, error, 'User Deleted UnSuccessfull');
            }
    }
}

export default UserController.getInstance();