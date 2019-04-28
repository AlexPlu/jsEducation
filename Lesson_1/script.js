'use strict';

var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string'*9);

let something;
console.log(something);

let person = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(person.name);

let arr = ['plum.png','orange.jpg','apple.bmp'];

console.log(arr[1]);

//alert("Hello World!");

//let answer = +prompt("Are you 18?", "Yes");

//console.log(answer);

//console.log("arr" + " - object");
//console.log(4 + " - object");

let incr = 10,
    decr = 10;

console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log("2" === 2);

let isChecked = true,
    isClose = false;

    console.log(isChecked || isClose);