import { Request, Response, NextFunction } from 'express';
import errorHandler from './errorHandler';

export default (config: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        console.log('Config is: ', config);
        console.log('Request body is: ', req.body);
        console.log('Request query is: ', req.query);
        console.log('Request parameters are: ', req.params);
        const errorArray = [];
        Object.keys(config).forEach(key => {
            const keys = Object.keys(config[key]);
            const { regex } = config[key];
            const { in: reqMethod } = config[key];
            if (keys.includes('required') && config[key].required === true) {
                if (req[reqMethod][key] === undefined || req[reqMethod][key] === null) {
                    errorArray.push({ error: 'input is empty', message: `${key} is required`, status: 500, timeStamp: new Date()});
                }
            }
            if (keys.includes('regex')) {
                if (!regex.test(req[reqMethod][key])) {
                     errorArray.push({ error: 'Error found in', message: `${key} is invalid`, status: 500, timeStamp: new Date()});
                }
            }
         if (config[key].custom !== undefined) {
                if (config[key].custom(reqMethod, req, res, next) === 'Not an Object') {
                    errorArray.push('Object not found');
                }
            }
        });

        console.log(errorArray);
        if (errorArray.length !== 0) {
            next(errorArray);
        }
        next();
    };
};