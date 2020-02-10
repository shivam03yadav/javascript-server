import * as jwt from 'jsonwebtoken';
import configuration from '../../config/configuration';
import hasPermission from '../../../extraTs/utils/permission';
import { Request, Response, NextFunction } from 'express';
import userRepository from '../../repositories/user/UserRepository';
import IUserModel from '../../repositories/user/IUserModel';
import UserRepository from '../../repositories/user/UserRepository';

interface IRequest extends Request {
    user: IUserModel;
}

export default (moduleName, permissionType) => (req: Request, res: Response, next: NextFunction) => {
    console.log('authmiddleware', moduleName, permissionType);
    try {
        const  userRepo: UserRepository = new UserRepository();
        const token = req.headers.authorization;
        console.log('1', token);
        const { secretKey } = configuration;
        const decodedUser = jwt.verify(token, secretKey);
        console.log('2', decodedUser);
        if (!decodedUser) {
            return next({
                staus: 403,
                error: 'Unauthorized Access',
                message: 'Unauthorized Access'
            });
        }
        userRepo.findOne(decodedUser._id).then((data) => {
            req.user = data;
            console.log(data);
            const role: string = data.role;
            console.log(role);
        if (!hasPermission(moduleName, role, permissionType)) {
            return next({
                staus: 403,
                error: 'Unauthorized Access',
                message: 'Unauthorized Access'
            });
        }
        next();
    });
    }
    catch (error) {
        return next({
            staus: 403,
            error: 'Unauthorized Access',
            message: error.message
        });
    }
};