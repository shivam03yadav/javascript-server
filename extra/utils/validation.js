




import {validateEmail} from "./helper.js"



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


export default validateUser;
