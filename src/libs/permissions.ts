import { permissions } from './constants';
function hasPermission(moduleName: string, role: string, permissionType: string): boolean {
    const data: any = permissions[moduleName];
    const opration: any = data[permissionType];
    return opration.some(element => {
        if (element === role) {
            return true;
        } else {
            return false;
        }
    });
}
export default hasPermission;
