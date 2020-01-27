const users = [{
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    },
    {
        traineeEmail: 'trainee2@successive.tech',
        reviewerEmail: 'reviewer2@successive.tech',
    },
    {
        traineeEmail: 'trainee3@successive.tech',
        reviewerEmail: 'reviewer3@successive.tech',
    },
    {
        traineeEmail: 'trainee4@successive.tech',
        reviewerEmail: 'reviewer4@successive.tech',
    },
    {
        traineeEmail: 'trainee5@successive.tech',
        reviewerEmail: 'reviewer5@successive',
    }

];





let validateEmail =  function(user){
    let validate = /([a-zA-Z0-9_\-\.]+)@successive[.]tech$/gmi;
    if(user.match(validate)){
        return true
        }

    else { 
          return false;
         }

}


let validateUser = function(users){

      let trueName = [];
      let falseName= [];
    
      for(let i=0;i<=users.length-1;i++){
        let {traineeEmail,reviewerEmail} = users[i];
        
          if(validateEmail(traineeEmail)){
            trueName.push(traineeEmail);
           }
           else{
            falseName.push(traineeEmail);
        }
        
        if(validateEmail(reviewerEmail)){
              trueName.push(reviewerEmail);
           }
        else{
            falseName.push(reviewerEmail);
        }

    }


    console.log(`Number of valid users ${trueName.length}`);
    trueName.forEach(element => {console.log(element); });
    
    console.log(`\nNumber of invalid users ${falseName.length}`);
    falseName.forEach(element =>{console.log(element);});
    
}


validateUser(users);
