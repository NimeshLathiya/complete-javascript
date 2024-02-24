//!string

//~length
console.log("---------------------length-------------------");
let myName = "nimesh";
console.log(myName.length);

console.log("---------------------Escape Character-------------------");
//~Escape Character
let anySentence = 'We are the so-called "Vikings" from the north.';
console.log(anySentence); //We are the so-called "Vikings" from the north.

console.log("---------------------finding -------------------");
//~find string
const myData = "hello i am nimesh";
// console.log("---------------------index of-------------------")
console.log(myData.indexOf("am")); //8

console.log("---------------------last index of-------------------");
console.log(myData.lastIndexOf("e", 8)); //1

const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
const searchTerm = "dog";

console.log(
  `The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(
    searchTerm,
    52
  )}`
);
//"The index of the first "dog" from the end is 52"

console.log("---------------------search-------------------");
const myBioData = "I am the nl Technical";
let sData = myBioData.search("Technical");
console.log(sData); //12

console.log("---------------------string slicing-------------------");
//~string slicing
var str = "my name is nimesh";
let res = str.slice(0, 4);
console.log(res); //my n

console.log("---------------------indexing(charAt)-------------------");
//~indexing
let str_1 = "HELLO WORLD";
console.log(str_1.charAt(9)); //L

console.log(str_1.charCodeAt(0)); //return unicode

//~property access
console.log("---------------------property access-------------------");
var str = "HELLO WORLD";
console.log(str[1]); //E

console.log("---------------------usefull method-------------------");
//~usefull method
let Name = "nimesh lathiya";
console.log(Name.toUpperCase()); //NIMESH LATHIYA
console.log(Name.toLowerCase()); //nimesh lathiya

console.log("---------------------str concatination-------------------");
//~string concatenation
let fName = "nimesh";
let lName = "lathiya";
console.log(fName + lName);
console.log(`${fName} ${lName}`);
console.log(fName.concat(lName)); //nimeshlathiya
console.log(fName.concat(" ", lName)); //nimesh lathiya

console.log("---------------------str trim-------------------");
//~String.trim()
var str = "              Hello         World!            ";
console.log(str.trim()); //hello        world!

console.log("---------------------length to Array -----------------");
//~string to array
var txt = "a, b,c d,e";
console.log(txt.split(",")); //['a', ' b', 'c d', 'e'] // Split on commas
console.log(txt.split(" ")); // Split on spaces
console.log(txt.split("|")); // Split on pipe
