import { Request, Response, NextFunction } from 'express';

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
                    errorArray.push({ message: config[key].errorMessage, location: config[key].in[0], key: `${key}`, value: `${req[reqMethod][key]}` });
                }
            }
            if (keys.includes('regex')) {
                if (!regex.test(req[reqMethod][key])) {
                    errorArray.push({ message: config[key].errorMessage, location: config[key].in[0], key: `${key}`, value: `${req[reqMethod][key]}` });
                }
            }
            if (config[key].custom !== undefined) {
                if (config[key].custom(req[reqMethod].dataToUpdate)) {
                    errorArray.push({error: 'Error Occured', message: config[key].errorMessage });
                }
                console.log('valid data');
            }
        });
        console.log(errorArray);
        if (errorArray.length !== 0) {
            const error = {
                status: 400,
                error: errorArray
            };
            next(error);
        }
        next();
    };
};