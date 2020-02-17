interface IAUTH {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
}
interface IPERM {
    getUsers: IAUTH;
    Users: IAUTH;
}
export default IPERM;