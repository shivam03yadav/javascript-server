import * as express from 'express';
const errorHandler = (err, req: express.Request, res: express.Response, next: express.NextFunction): void => {
    // const { error, code, message , value, location} = err;
    console.log(err);
    res.status(err.status).send({
        message: 'error occured',
        status: err.status || 500,
        err,
        timestamp: new Date()
    });
    res.end('ok');
};
export default errorHandler;