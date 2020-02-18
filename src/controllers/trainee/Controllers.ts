import { Request, Response } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import SystemResponse from '../../libs/SystemResponse';
import * as bcrypt from 'bcrypt';


class TraineeController {
    static instance: any;
    private userRepository: UserRepository = new UserRepository();
    static getInstance() {

        if (TraineeController.instance) {
            return TraineeController.instance;
        }

        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }

    create = async (req: Request, res: Response) => {

        console.log(':::::::::::::::::::CREATE USER:::::::::::::::::::');
        try {
            const userData = req.body;
            const userId = req.user._id;
            const hash = await bcrypt.hash(userData.password, 10);
            const user = await this.userRepository.create({ ...userData, password: hash }, userId);
            if (user) {
                return SystemResponse.success(res, user, 'User Added Successfully');
            }
        }
        catch (error) {
            return SystemResponse.error(res, error.message, 'User Added UnSuccessfull');
        }
    }

    update = async (req: Request, res: Response) => {
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
        let sortBy;
        if (req.query.sortBy === 'email') {
            sortBy = {
                email: 1
            };

        }
        else if (req.query.sortBy === 'name') {
            sortBy = {
                name: 1
            };
        }
        else {
            sortBy = {
                updatedAt: 1
            };
        }
        try {
            const user = await this.userRepository.list1(sortBy, 'trainee', req.query.skip, req.query.limit);
            const countTrainee = await this.userRepository.countTrainee();
            const trainee = {
                count: countTrainee,
                records: user,
            };
            if (user) {
                return SystemResponse.success(res, trainee, 'List Of Users');
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

export default TraineeController.getInstance();