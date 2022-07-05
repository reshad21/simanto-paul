// let stdname = prompt('ENTER STUDENT NAME:');
// let stdid = prompt('ENTER STUDENT ID:');


let ban  = parseInt(prompt('Enter bangla mark'));
let eng  = parseInt(prompt('Enter english mark'));
let sc   = parseInt(prompt('Enter socila mark')) ;
let sci  = parseInt(prompt('Enter science mark'));
let math = parseInt(prompt('Enter math mark'));
let rel  = parseInt(prompt('Enter religion mark'));

// grade function //
function grade(mark){
    if(mark >= 80){
        return "A+";
    }

    else if(mark >= 79){
        return "A";
    }

    else if(mark >= 69){
        return "A-";
    }
    
    else if(mark >= 59){
        return "B";
    }
    
    else if(mark >= 49){
        return "C";
    }
    
    else if(mark >= 33){
        return "D";
    }

    else if(mark > 33){
        return "Fail";
    }

}

// calculate points //
function point(mark){
    if(mark >= 80){
        return 5;
    }

    else if(mark >= 79){
        return 4.50;
    }

    else if(mark >= 69){
        return 4.00;
    }
    
    else if(mark >= 59){
        return 3.75;
    }
    
    else if(mark >= 49){
        return 3.00;
    }
    
    else if(mark >= 33){
        return 2.00;
    }

    else if(mark > 33){
        return 0.00;
    }

}

// Total Point //
function totalPoint(){
    let result = point(ban) + point(eng) + point(sc) + point(sci) + point(math) + point(math) + point(rel);
    return result;
}


console.log(`
    Studnet Name: Rashed Uzzaman Reshad
    Student Id  : 181
    ------------------------------------------------------

    Subject Name    Marks       Grade             Points
    Bangla          ${ban}      ${grade(ban)}      ${point(ban)}
    English         ${eng}      ${grade(eng)}      ${point(eng)}
    Sc              ${sc}       ${grade(sc)}       ${point(sc)}
    Science         ${sci}      ${grade(sci)}      ${point(sci)}
    Math            ${math}     ${grade(math)}     ${point(math)}
    Religion        ${rel}      ${grade(rel)}      ${point(rel)}
    ------------------------------------------------------
    Total Points: 5.00
    Final Grade : A+
`);
