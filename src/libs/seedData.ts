import UserRepository from '../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import config from '../config/configuration';

const userRepository = new UserRepository();

export default () =>
    bcrypt.hash(config.password, 10, (err, hash) => {
        if (err) {
            console.log(err);
        }
        console.log('data is seeding');
        const user = {
            name: 'Shivam Yadav',
            address: 'Noida',
            email: 'shivam.yadav@successive.tech',
            password: hash,
            Dob: '05/03/1999',
            mobileNumber: 9599633437,
            role: 'head-trainer',
            hobbies: ['sketching', 'cricket'],
        };

        userRepository.count().then((count: number): any => {

            console.log('Count of Users is', count);

            if (!count) {
                return userRepository.create(user, undefined)
                    .then((res) => {
                        console.log('User Seeded Successfully', res);
                    });
            } else {
                console.log('User is Already Seeded');
            }
        }).catch((error) => console.error(error));

    });