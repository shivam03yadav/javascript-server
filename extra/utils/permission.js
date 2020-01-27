let permission = {
    'getUsers':{
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        delete: [],
        }
    }
    
    let hasPermission= function(moduleName,role,permissionType){
        console.log("hasPermission", moduleName,role,permissionType);
        let per = permission[moduleName];
        let p = per[permissionType];
          return p.some(element => {return element == role})
    
    }
    
    hasPermission('getUsers','trainee','read');
    hasPermission('getUsers','head-trainer','read')
    
    