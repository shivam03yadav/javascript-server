import * as express from 'express';
import IConfig from './config/IConfig';

class Server {
    app: express.Application;
    constructor(private config: IConfig) {
        this.app = express();
    }
    bootstrap(): Server {
        this.setupRoutes();
        return this;
    }
    setupRoutes(): void {
        this.app.get('/health-check', (req: express.Request, res: express.Response): void => {
            res.send('<h1>I am OK</h1>');
        }
        );
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
}
export default Server;