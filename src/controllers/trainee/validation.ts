import { NextFunction } from 'express';

const validation = {
    create: {
        id: {
            required: true,
            errorMessage: 'Id is required',
            string: true,
            regex: /^[a-zA-Z0-9_.-]*$/,
            in: ['body'],
        },
        name: {
            required: true,
            string: true,
            regex: /^[A-Za-z]+$/,
            in: ['body'],
            errorMessage: 'Name is required',
        }
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
            regex: /^[0-9]*$/,
            in: ['query'],
            errorMessage: 'invalid skip',
            custom: (reqMethod, req: Request, res: Response, next: NextFunction): void => {
                if (req[reqMethod].skip === undefined) {
                    req[reqMethod].skip = '0';
                }
            }
        },
        limit: {
            required: false,
            default: 10,
            regex: /^[0-9]*$/,
            number: true,
            in: ['query'],
            errorMessage: 'invalid limit',
            custom: (reqMethod: any, req: Request, res: Response, next: NextFunction): void => {
                if (req[reqMethod].limit === undefined) {
                    req[reqMethod].limit = '10';
                }
            }
        }
    },
    update: {
        id: {
            required: true,
            string: true,
            regex: /^[a-zA-Z0-9_.-]*$/,
            in: ['body']
        },
        dataToUpdate: {
            in: ['body'],
            required: true,
            isObject: true,
            custom: (reqMethod: any, req: Request, res: Response, next: NextFunction): void => {
                if (typeof req[reqMethod] !== 'object') {
                    return next({ error: 'Error Found', message: 'Not an Object' });
                }
            },
        }
    }
};

export default validation;