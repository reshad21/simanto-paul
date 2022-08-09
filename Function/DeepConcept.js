function getNames() {
    // get names from the database or API
    let firstName = 'John';
    let lastName = 'Doe';
  
    // return values
    return {
      'firstName': firstName,
      'lastName': lastName,
      'fullName':"john doe"
    };
  }

// jahate function ta return kortece akta object ar object ar modhay onek gula value takbe tai amra object destructuring system ta follow korlam
 const {firstName , lastName , fullName} = getNames();