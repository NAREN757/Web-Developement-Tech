let str = "  hello  ";
msg.trim();
// remove space from start and end;

str.toUpperCase();

str.toLowerCase();

// indexOf
// Returns the first index of occurrence of some value in string. Or gives - 1 if not found.

let str = "IloveCoding";

str.indexOf("love");
str.indexOf("I");
str.indexOf("o");

// Method Chaining
// Using one method after another. Order of execution will be left to right.
let msg = "   hello  ";
let newMsg = msg.trim().toUpperCase() ;
console. log (newMsg) ;


// slice
// Returns a part of the original string as a new string.
let str = "IloveCoding";
str.slice(5);
str.slice(1,5);
str.slice(str.length);


// replace
// Searches a value in the string & returns a new string with the value replaced.
let str = "IloveCoding";
str.replace("love", "do")
str.replace("o", "x")


// repeat
// Returns a string with the number of copies of a string
let str = "Mango";
str.repeat(3);