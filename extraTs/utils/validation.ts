



import { validateEmail } from './helper';



const validateUser = (users) => {

  const trueName: string[] = [];
  const falseName: string[] = [];

  for (let i: number = 0; i <= users.length - 1; i++) {
    const { traineeEmail, reviewerEmail } = users[i];

    if (validateEmail(traineeEmail)) {
      trueName.push(traineeEmail);
    }
    else {
      falseName.push(traineeEmail);
    }

    if (validateEmail(reviewerEmail)) {
      trueName.push(reviewerEmail);
    }
    else {
      falseName.push(reviewerEmail);
    }

  }


  console.log(`Number of valid users ${trueName.length}`);
  trueName.forEach(element => { console.log(element); });

  console.log(`\nNumber of invalid users ${falseName.length}`);
  falseName.forEach(element => { console.log(element); });

};


export default validateUser;
