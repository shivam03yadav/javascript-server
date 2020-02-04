import { Request, Response } from 'express';

class TraineeController {
    static instance: TraineeController;
    static getInstance = () => {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }
    create = (req: Request, res: Response) => {
        console.log('::::::::::::::::::::-CREATE TRAINEE-::::::::::::::::::::');
        res.send({
            status: 'ok',
            message: 'Trainee Added Successfully',
            data: {
                id: 236,
                name: 'Shivam Yadav',
                address: 'Noida',
            }
        });
    }
    update = (re: Request, res: Response) => {
        console.log('::::::::::::::::::::-UPDATE TRAINEE-::::::::::::::::::::');
        res.send({
            status: 'ok',
            message: 'Trainee Updated Successfully',
            data: {
                id: 307,
                name: 'Aryan Singhal',
                address: 'Ghaziabad',
            }
        });
    }
    delete = (re: Request, res: Response) => {
        console.log('::::::::::::::::::::-DELETE TRAINEE-::::::::::::::::::::');
        res.send({
            status: 'ok',
            message: 'Trainee Deleted Successfully',
            data: {
                id: 238,
                name: 'Suraj Aggarwal',
                address: 'Delhi',
            }
        });
    }
    list = (req: Request, res: Response) => {
        console.log('::::::::::::::::::::-INSIDE LIST TRAINEE-::::::::::::::::::::');
        res.send({
            status: 'ok',
            message: 'Trainee Listed Successfuly',

            data: [{
                id: 201,
                name: 'Firoz',
                address: 'Pune',
            },
            {
                id: 204,
                name: 'Neha Goel',
                address: 'Delhi',
            },
            ]

        });
    }
}

export default TraineeController.getInstance();