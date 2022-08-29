const person ={
    name: "reshad",
    age: 28,
    skill:{
        html: "pro",
        css: "good",
        javascript: "intermideat"
    }
}

// use dot notation for access javascript value
let jsPosition = person.skill.javascript;

// use bracket notation for access javascript value
let jssituation = person["skill"]["javascript"];
console.log(jssituation);


// some begineer problem
let js = "javascript";

let jsskill = person.skill.js;
console.log(jsskill);
// output: [undefined] karon skill ar modhay kothao js property nai tai sa undefined dakice

// so the right way is
let jsjob = person.skill[js]
console.log(jsjob);