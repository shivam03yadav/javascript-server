import * as mongoose from 'mongoose';

interface IVersionableModel extends mongoose.Document {
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    deletedAt: Date;
    deletedBy: string;
    originalId: any;

}
export default IVersionableModel;