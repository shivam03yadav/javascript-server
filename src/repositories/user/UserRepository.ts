import IUserModel from './IUserModel';
import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import VersionableRepository from '../versionable/VersionableRepository';

class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {

    private userModel: mongoose.Model<IUserModel>;

    constructor() {
        super(userModel);
    }


    create = (data: any, userId) => {
        return super.create(data, userId);
    };
    count1 = () => {
        return super.count();
    }
    update1 = (id: string, data: any) => {
        return super.update(id, data, undefined);
    }
    list1 = () => {
        return super.list();
    }
    delete1 = (id: string, userId) => {
        if (id !== undefined) {
            return super.delete(id, userId);
        } else {
            console.log('Please enter Id');
        }
    };

}
export default UserRepository;