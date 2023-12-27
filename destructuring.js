/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];

// let jhon = ages [0];
// let mary = ages [1];
// let joe = ages [2];

let[jhon, mary, joe]=ages;

console.log(jhon, mary, joe);
// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};

let {mike,jill,alicia}=jobs;
console.log(mike, jill, alicia);
// Destructuring subsets

let lenguages = ["english", "french", "spanish", "german", "japanese"];
let [, ,native, ,secundary] = lenguages; //si agregamos comas saltamos ese resultado

console.log(native, secundary);
let languages2={
    first:"english",
    second:"spanish",
    third:"german",
    fourth:"japanese",
};
let {first,third} = languages2;
console.log(first, third);

// Using rest parameter syntax

let fruits = ["apple", "orange",  "banana", "peach", "cherry"];
let [favorite, seconFavorite, ...others] = fruits;

console.log(favorite, seconFavorite, others);

let people = {
    jhony : "pizza",
    laura: "vegetales",
    andrea: "carne",
    sara:"cerdo",
}

let {jhony, andrea, ...rest} = people;
console.log(jhony);
console.log(andrea);
console.log(rest);
