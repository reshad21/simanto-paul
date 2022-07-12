let name  = "rashed uzzaman reshad";
let age   = 28;
let skill = "fontend developer";

// how to store data in borwser local Storage? //
localStorage.setItem('name',name);
localStorage.setItem("age",age);
localStorage.setItem("skill",skill);

// now we take data from local Storage //
let username = localStorage.getItem("name");
let wrapper = document.getElementById("wrapper");
wrapper.innerHTML=username;
console.log(username);


// ## remember local Storage could not take object data //
let person = {
    fullName  : "john dow",
    profession: "English teacher",
    homeTown  : "London"
}

console.log(person);
// >{fullName: 'john dow', profession: 'English teacher', homeTown: 'London'} //

// Now we send this data in the local storeage
let data = JSON.stringify(person);
console.log(data);
// {"fullName":"john dow","profession":"English teacher","homeTown":"London"} //
localStorage.setItem('persondata',data);

// Now we call localStorage to use those data

let takedata = localStorage.getItem('persondata');
let actualdata = JSON.parse(takedata);

console.log(actualdata);
console.log(actualdata.fullName);
console.log(actualdata.profession);
console.log(actualdata.homeTown);

wrapper.innerHTML = `<div><p>Hello my name is ${actualdata.fullName} my profession is ${actualdata.profession} and my home town is ${actualdata.homeTown}</p></div>`;







