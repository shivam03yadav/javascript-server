import { Request, Response, NextFunction } from 'express';


export default ( config ) => {
    return (req: Request, res: Response, next: NextFunction ) => {
        console.log('config is', config);
        console.log('body is', req.body);
        console.log('body is', req.query);
        Object.keys(config).forEach(key => {
            const { regex } = config[key];

            if (config[key].required) {

                if (config[key]=== undefined) {
                    re

}
               else{

               }
            }
        });
        next();
    };
};