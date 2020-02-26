import IUserModel from './IUserModel';
import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import VersionableRepository from '../versionable/VersionableRepository';

class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {

    private userModel: mongoose.Model<IUserModel>;

    constructor() {
        super(userModel);
    }


    createUser = (data: any, userId) => {
        return super.create(data);
    };
    count = () => {
        return super.count();
    }
    update = (id: string, data: any, userId: string) => {
        return super.update(id, data, undefined);
    }
    list = (userRole, skip, limit, sortBy, searchBy) => {
        return super.list(userRole, skip, limit, sortBy, searchBy);
    }
    delete = (id: string, userId) => {
        if (id !== undefined) {
            return super.delete(id, userId);
        } else {
            console.log('Please enter Id');
        }
    };

}
export default UserRepository;