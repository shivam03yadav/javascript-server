import IVersionDocument from '../versionable/ IVersionableDocument';
export default interface IUserModel extends IVersionDocument {

    id: string;
    name: string;
    address: string;
    email: string;
    password: string;
    role: string;
    Dob: Date;
    mobileNumber: number;
    hobbies: string[];
}