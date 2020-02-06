import * as express from 'express';
import IConfig from './config/IConfig';
import * as bodyParser from 'body-parser';
import { errorHandler, notFoundRoute } from './libs';
import mainRouter from './router';


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
    run(): Server {
        this.app.listen(this.config.port, err => {
            if (err) {
                console.log(err);
                throw err;
            }
            console.log(`server is running on ${this.config.port}`);
        });
        return this;
    }
    initBodyParser() {
        const { app } = this;
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
    }
}
export default Server;