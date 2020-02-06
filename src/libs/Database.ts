import * as mongoose from 'mongoose';

class Database {
    static open = (mongoUri: string) => {
        const promise = new Promise((resolve, reject) => {
            mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
                if (err) {
                    reject(err);
                }
                console.log('database connected at : ', mongoUri);
                resolve();
            });
        });
        return promise;

    }
    static disconnect = () => {
        mongoose.connection.close();
        console.log('Database disconnected');
    }
}

export default Database;