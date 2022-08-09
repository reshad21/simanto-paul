let lyrics = "tumi bondhu kala pakHHi ami jano ki. bosonto kale tomaky bolte praini ni. sada sada kala rong";

let chrecter = lyrics.split('');
let word = lyrics.split(' ');
let sentence = lyrics.split('.');
let partial = lyrics.slice(5, 8);
let partial2 = lyrics.substring(5, 8);

console.log(partial);
console.log(partial2);

let lines = sentence.join(":");
console.log(lines);

