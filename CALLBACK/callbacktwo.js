
// =========== 1st understanding =========== //
// function greet(name){
//     console.log(`HI ${name}`);
// }

// greet('Hero');


// ========= 2nd understanding ======== //
function greet(name, callback){
    console.log(`HI ${name}`);
    callback();
}

// ----- akn amra ar akta function lakbo kintu oi function take amara alada vabbe call korbona rather than oita amra akta function ar parameter hisabe pass korbo. ----- //

function callme(){
    console.log('I am callback function');
}

// greet('Hero',callme);

console.log(`
-------------------------
Now we learn why we need
to know callback function
-------------------------
`)

// =========== 3rd understanding ========== //
function greet(name,){
    console.log(`HI ${name}`);
}

function callme(){
    console.log('I am callback function');
}

// setTimeout(greet,10000,'Hero');
// callme();



// =========== 4TH understanding ========== //
function greet(name,callback){
    console.log(`HI ${name}`);
    callback();
}

function callme(){
    console.log('I am callback function');
}

setTimeout(greet,10000,'Hero',callme);


// 3rd understanding a amra dekci ja setTimeout function ar jonno greet function ta execute hoite 10000ms time lagce abong ai 10000ms ar javascript wait na kore sa tar porer function ka execute kore dica jata synchronus behabiour na. tai ai problem ta thake rahai paber jonno callback ar abisker hoice. 

// video link : https://www.facebook.com/subhojit.dutta.102977/videos/978803986133381/