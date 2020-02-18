import * as mongoose from 'mongoose';
import IVersionableModel from './ IVersionableDocument';

export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {

    constructor(modelType: any) {
        this.modelType = modelType;
    }
    public getObjectId() {
        return String(mongoose.Types.ObjectId());
    }

    public modelType: M;

    public count() {
        return this.modelType.countDocuments();
    }

    public findOne(query) {
        return this.modelType.findOne(query);
    }

    public async create(options, userId): Promise<D> {
        const id = this.getObjectId();
        return this.modelType.create({
            ...options,
            _id: id,
            originalId: id,
            createdAt: Date.now(),
            createdBy: userId
        });

    }
    public async update(id, options, userId): Promise<D> {
        console.log(options);
        const iD = this.getObjectId();
        await this.newUpdatedData(id, undefined);
        return this.modelType.create({
            ...options,
            _id: iD,
            originalId: id,
            updatedAt: Date.now(),
            updatedBy: userId
        });
    }
    public async newUpdatedData(id, userId): Promise<D> {
        const data = await this.modelType.findByIdAndUpdate(id, {
            deletedAt: Date.now(),
            deletedBy: userId
        });
        return data;
    }

    public async list() {
        return this.modelType.find();
    }

    public async delete(id: string, userId) {
        await this.newUpdatedData(id, userId);
    }
}