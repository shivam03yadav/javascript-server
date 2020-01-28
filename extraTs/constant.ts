import { IgetUser } from './interfaces';

const permission: IgetUser = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }
};





export { permission };