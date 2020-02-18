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

    public async create(options): Promise<D> {
        const id = this.getObjectId();
        return this.modelType.create({
            ...options,
            _id: id,
            originalId: id,
            createdAt: Date.now(),
            createdBy: id
        });

    }
    public async update(id, options): Promise<D> {
        console.log(options);
        const ID = this.getObjectId();
        await this.newUpdatedData(id);
        return this.modelType.create({
            ...options,
            _id: ID,
            originalId: id,
            updatedAt: Date.now(),
            updatedBy: id
        });
    }
    public async newUpdatedData(id): Promise<D> {
        const data = await this.modelType.findByIdAndUpdate(id, {
            deletedAt: Date.now(),
            deletedBy: id
        });
        return data;
    }

    public async list() {
        return this.modelType.find();
    }

    public async delete(id: string) {
        await this.newUpdatedData(id);
    }
}