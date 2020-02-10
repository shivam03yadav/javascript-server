import IUserModel from './IUserModel';
import * as Mongoose from 'mongoose';
import { userModel } from './UserModel';

class UserRepository {

    private userModel: Mongoose.Model<IUserModel>;

    constructor() {
        this.userModel = userModel;
    }

    create = (data: any) => {
        return this.userModel.create(data);
    };

    count = () => {
        return this.userModel.countDocuments();
    }

    update = (id: string, data: any) => {
        return this.userModel.findOneAndUpdate({ _id: id }, data);
    };
    findOne = (id: string) => {
        return this.userModel.findOne({ _id: id });
    };
    list = () => {
        return this.userModel.find();
    };

    delete = (id: string) => {
        if (id !== undefined) {
            return this.userModel.deleteOne({ id });
        } else {
            console.log('please enter the id');
        }
    }
}
export default UserRepository;