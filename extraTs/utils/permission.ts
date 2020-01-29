import { permission } from '../constant';
const hasPermission = (moduleName: string, role: string, permissionType: string): boolean => {
   console.log('hasPermission', moduleName, role, permissionType);

   const data: any = permission[moduleName];
   if (!permission || !data[permissionType]) {
      console.log(`${role} doesn't have permission to ${permissionType}`);
      return false;
   }
   if (data[permissionType].includes(role)) {
      console.log(`${role} has permission to ${permissionType}`);
      return true;
   }
   else
      console.log(`${role} doesn't have permission to ${permissionType}`);

};

export default hasPermission;


