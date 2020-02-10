import * as express from 'express';
import IConfig from './config/IConfig';
import notFound from './libs/routes/notFoundRoute';
import * as bodyParser from 'body-parser';
import { errorHandler, notFoundRoute } from './libs';
import mainRouter from './router';
import Database from './libs/Database';

class Server {
    app: express.Application;
    constructor(private config: IConfig) {
        this.app = express();
    }

    bootstrap(): Server {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }
    setupRoutes(): void {
        this.app.get('/health-check', (req: express.Request, res: express.Response): void => {
            res.send('<h1>I am OK</h1>');
        });
        this.app.use('/api', mainRouter);
        this.app.use(notFoundRoute);
        this.app.use(errorHandler);
    }
    run = () => {
        const { app, config: { port, mongoUri } } = this;

        Database.open(mongoUri).then((res) => {
            app.listen(this.config.port, (err: string): void => {
                if (err) {
                    console.log(err);
                    throw err;
                }
                console.log(`server is running on ${this.config.port}`);
            });
        }).catch(err => {
            console.log(err);
        });
    }
    initBodyParser() {
        const { app } = this;
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
    }
}
export default Server;