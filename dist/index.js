"use strict";
// TypeScript Datatypes
// 1st method to decalare a varible with data type
let a = "shakti";
let b = true;
let c = 123;
// above variable can't hold other value as their data type is already defined
// 2nd method to decalare a variable with data type
let nambo = "shakti";
let num = 123;
// console.log(nambo,num)
// Union data type can hold more than one data type value
let surname;
surname = "kumar";
surname = 2134;
// -------------- arrow function with argument --------------
// in function argument we have to defined the data type of arguments
// also you can define the data type of return
const fun = (n, m) => {
    return n * m;
};
// console.log(fun(3,3));
// ------------- arrays in typeScript ---------------
// defining the data type of array
// now empty array can hold only number's not any other's value
const arr = [1, 2, 3];
