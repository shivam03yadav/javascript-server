import * as mongoose from 'mongoose';

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
    public countTrainee() {
        return this.modelType.countDocuments({ role: 'trainee', deletedAt: { $exists: false } });
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

    public async list(userRole, skip, limit, sortBy, searchBy) {
        return this.modelType.find({ role: userRole, deletedAt: undefined, ...searchBy }).sort(sortBy).skip(Number(skip)).limit(Number(limit));
    }

    public async delete(id: string, userId) {
        await this.newUpdatedData(id, userId);
    }
}