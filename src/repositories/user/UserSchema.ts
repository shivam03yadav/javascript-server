import VersionableSchema from '../versionable/VersionableSchema';

class UserSchema extends VersionableSchema {
    constructor(options: any) {
        const userSchema = {
            id: String,
            name: String,
            address: String,
            email: String,
            role: String,
            Dob: Date,
            mobileNumber: Number,
            hobbies: [String]
        };
        super(userSchema, options);
    }
}

export default UserSchema;