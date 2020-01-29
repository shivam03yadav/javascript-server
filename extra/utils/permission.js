import {permission} from "../constant.js";
    
let hasPermission= function(moduleName,role,permissionType){
    console.log("hasPermission",moduleName,role,permissionType);
    let data=permission[moduleName];
    if(!permission||!data[permissionType])
       { console.log(`${role} doesn't have permission to ${permissionType}`);
          return false;
       }
    if(data[permissionType].includes( role )){
        console.log(`${role} has permission to ${permissionType}`);
        return true;
      }
    else
       console.log(`${role} doesn't have permission to ${permissionType}`);

    }

 export default hasPermission;
    
    
