let student = {
    name : "reshad",
    age : 27,
    hometown : "Barishal"
}

// json formate data //
let student_json = {
    "name" : "reshad",
    "age" : 27,
    "hometown" : "Barishal"
}
// ai formate a javascript a data rakle taholeo javascript aita ke object a convert kore nay jodio ata akta JSON data  formate //

// now we convert student object into json formate //
let json_formate = JSON.stringify(student);
console.log(json_formate);


// now we convert json_formate variable into object data
let object_formate = JSON.parse(json_formate);
console.log(object_formate);
