import diamond from "./patterns/diamond.js"
import equilateral from "./patterns/equilateral.js"
import {hasPermission,validateUser} from "./utils/index.js"


diamond(5);
equilateral(10);
hasPermission('getUsers','trainer','read');

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
validateUser(users);