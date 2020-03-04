import { permission } from '../constant';

export default function hasPermission(moduleName: string, role: string, permissionType: string): boolean {
   console.log('hasPermission', moduleName, role, permissionType);
   if (permission[moduleName] === undefined)
      return false;
   const data = permission[moduleName];
   let tmp: boolean = false;
   if (data[permissionType] === undefined)
      return false;
   data.all.forEach(element => {
      if (element === role)
         tmp = true;
   });
   data[permissionType].forEach(element => {
      if (element === role) {
         tmp = true;
      }
   });
   return tmp;
}



