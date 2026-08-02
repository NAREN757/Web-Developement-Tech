//defining an Array in Javascript

let fruits = ['Mango','apple','jackfruit'];

let marks = [199, 85, 93, 76, 62];
let names = ["adam", "bob", "catlyn"];
let info = ["aman", 25, 6.1];//mixed array

// empty array
let newArr =[];

//Accessing an Arr Index
fruits[0];
fruits.length;

// Arrays are Mutable
let fruits = ["mango", "apple", "litchi"];
fruits [0] = "banana";


// Array Methods

// Push: add to end
// Unshift: add to start
// Pop: delete from end & returns it
// Shift: delete from start & returns it

let cars = ["audi", "bmw", "xuv","maruti"];
cars.push('BMW');
cars.pop();
cars.indexOf('BMW');


let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "violet"];

primary.concat(secondary);

primary.reverse();

let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
colors. slice (2,3);
colors. slice(2);
colors. slice()


// splice: removes I replaces I add elements in place

colors.splice(4);

colors. splice (0, 1);

colors.sort();