const validation = {
    create: {
        email: {
            required: true,
            string: true,
            regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((successive.tech))$/,
            in: ['body'],
            errorMessage: 'Email is required',
        },
        password: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'please enter password',
        },
        mobileNumber: {
            required: true,
            number: true,
            in: ['body'],
            errorMessage: 'Number is required',
        },
        hobbies: {
            in: ['body'],
            required: true,
            isObject: true,
            errorMessage: 'hobbies is required'
        },
    },
    delete: {
        id: {
            required: true,
            errorMessage: 'Id is required',
            in: ['params']
        }
    },
    get: {
        skip: {
            required: false,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid',
        },
        limit: {
            required: false,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: 'Limit is invalid',
        }
    },
    update: {
        id: {
            required: true,
            string: true,
            in: ['body']
        },
        dataToUpdate: {
            in: ['body'],
            required: true,
            isObject: true,
            errorMessage: 'Data is invalid',
            custom: (value: any): boolean => {
                if (typeof value !== 'object') {
                    return true;
                }
                return false;
            }
        }
    }
};
export default validation;