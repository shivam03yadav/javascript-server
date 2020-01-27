let permission = {
    'getUsers':{
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        delete: [],
        }
    }
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

 
    hasPermission('getUsers','trainee','read');
    hasPermission('getUsers','head-trainer','read');
    
    



