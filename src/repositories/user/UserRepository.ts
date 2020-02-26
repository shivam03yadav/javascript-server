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
        return super.update(id, data, userId);
    }
    list = (sortBy, userRole, skip, limit) => {
        return super.list(sortBy, userRole, skip, limit);
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