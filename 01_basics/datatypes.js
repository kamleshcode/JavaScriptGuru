"use strict"; // treat all js code as newer version

// alert("hello") //we are using node js , not browser


// Datatypes:-

// number=> 2 to power 54
// BigInt
// String=>""
// Boolean=>true/false
// null=>standalone value ==> dtype is object "imp" 
// undefined
// Symbol

// ***IMP***
console.log(typeof undefined);//undefined
console.log(typeof null); //object

//  Primitive Datatype

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "superhero"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

