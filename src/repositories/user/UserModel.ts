import * as mongoose from 'mongoose';
import UserSchema from './UserSchema';
import IUserModel from './IUserModel';

export const userSchema = new UserSchema({
    collction: 'Users',
});
export const userModel: mongoose.Model<IUserModel> =
   mongoose.model<IUserModel>('User', userSchema, 'Users' , true );