// TypeScript Datatypes

// 1st method to decalare a varible with data type
let a: string = "shakti";
let b: boolean = true;
let c: number = 123;
// above variable can't hold other value as their data type is already defined


// 2nd method to decalare a variable with data type
let nambo = <string>"shakti";
let num = <number>123;
// console.log(nambo,num)

// Union data type can hold more than one data type value
let surname: string|number;
surname = "kumar"
surname = 2134;


// -------------- arrow function with argument --------------
// in function argument we have to defined the data type of arguments
// also you can define the data type of return
const fun = (n:number,m:number):number=>{
    return n*m;
}

// console.log(fun(3,3));


// ------------- arrays in typeScript ---------------

// defining the data type of array
// now empty array can hold only number's not any other's value
// method 1
const arr:number[] = [1,2,3];


// method 2
const arr1:Array<string> = ["shakti","kumar","ShaktiKumar"];

// arr1.forEach((i)=>{
//     // string will be print with upperCase letter
//     console.log(i.toUpperCase())
// })


// ************************************* Objects in typeScript **************************************
interface Obj {
    surname:string,
    age:number
}

interface newObj extends Obj {
    gender:string
}

const obj1:newObj = {
    surname:"kumar",
    age:24,
    gender:"male"
}
console.log(obj1)

const obj:Obj = {
    surname:"ashu",
    age:24
}

// console.log(obj)



//  ************************************** funtion in typescript ******************************************

// l is optional in function
type Func = (a:number,b:number,l?:number) => number

// we have assigned default value to l if user don't provide the value
const func:Func = (a,b,l = 1)=>{
    return a * b  * l
}

console.log(func(3,4))