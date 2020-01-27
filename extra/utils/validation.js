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

let validate = /([a-zA-Z0-9_\-\.]+)@successive[.]tech$/gmi;
let trueName = [];
let falseName= [];




let validateEmail =  function(user){
    if(user.match(validate)){
       trueName.push(user);
        return true
        }

    else {
          falseName.push(user);
          return false;
         }

}




let validateUser = function(users){

    for(let i=0;i<=users.length-1;i++){
        let {traineeEmail,reviewerEmail} = users[i];
        validateEmail(traineeEmail);
        validateEmail(reviewerEmail);
    }


    console.log(`Number of valid users ${trueName.length}`);
    trueName.forEach(element => {console.log(element); });
    
    console.log(`\nNumber of invalid users ${falseName.length}`);
    falseName.forEach(element =>{console.log(element);});
    
}


validateUser(users);
