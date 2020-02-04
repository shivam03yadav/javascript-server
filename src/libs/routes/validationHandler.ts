import { Request, Response, NextFunction } from 'express';

export default (config: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        console.log('Config is: ', config);
        console.log('Request body is: ', req.body);
        console.log('Request query is: ', req.query);
        console.log('Request parameters are: ', req.params);
        Object.keys(config).forEach(key => {
            const keys = Object.keys(config[key]);
            const { regex } = config[key];
            const { in: reqMethod } = config[key];
            if (keys.includes('required') && config[key].required === true) {
                if (req[reqMethod][key] === undefined || req[reqMethod][key] === null) {
                    return next({ error: 'Error found in', message: `${key} is required` });
                }
            }
            if (keys.includes('regex')) {
                if (!regex.test(req[reqMethod][key])) {
                    return next({ error: 'Error found in', message: `${key} is invalid` });
                }
            }
            if (config[key].custom !== undefined) {
                config[key].custom(reqMethod, req, res, next);
            }
        });
        return next();
    };
};