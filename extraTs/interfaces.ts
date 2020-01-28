
export interface Iuser {
    traineeEmail: string;
    reviewerEmail: string;
}

interface Ipermission {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
}

export interface IgetUser {
    [key: string]: Ipermission;
}