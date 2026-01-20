// // console.log("Hello, World!");
// // let numbers = [1, 3, 5, 7, 9];
// // let hasEven = numbers.some(x => x % 2 === 0);
// // console.log("Array has even number:", hasEven);
// let fruits1 = ["apple", "banana"];
// let fruits2 = ["cherry", "orange"];
// // let combined = fruits1.concat(fruits2); 
// // console.log("Combined fruits:", combined);
// //by sprade operator 
// console.log([...fruits1, ...fruits2]);  
// //array example 
// arr=[1,2,3,4,5];
// revarr=[...arr];
// console.log(revarr);
// //rest parameter constructors krne ke baad sekhenge 
// //syntax of ternary operator - condition ? true : false
// let age = 18;
// let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
// console.log(canVote);
// //practice questions
// //find out even and odd numbers from an array using ternary operator
// let number = 7;
// let evennum = (number % 2 === 0) ? "Yes, even" : "No, odd";
// console.log(evennum);
// //checking leap year 
// let year = 355779;
// let leapyear =(year%4===0) ? "yes the year is leap" : "no the year is not leap";
// console.log(leapyear);
//passing text case
//for leap year checking condition are : a year is a leap year if it is divisible by 4 but not divisible by 100 unless it is also divisible by 400.
let leapyear_1=2016;
let leapcheck=(leapyear_1%4===0 && leapyear_1%100!==0) || (leapyear_1%400===0) ? "yes the year is leap" : "no the year is not leap";
console.log(leapcheck);
// '|| ' is logical OR operator
// '&&' is logical AND operator
// nullish  operators , will read later 
//includes() method : checks if an array contains a certain element , returns true or false
//string methods ko khudse padhke likho and push krdo in repo 
//yaad se sab padho 
//array methods ko bhi khudse padhke likho and push krdo in repo
//first class functions and higher order functions ko bhi khudse padhke likho and push krdo in repo
//first class function ki def :1. in first class function we can pass a function to a variable , and we are treating the variable as a function
//2. we can pass a function as an argument to another function
//3. it can return a function from another function
const demo = () => {}

function sample(){
    console.log("sample");
    return function demo(){
        console.log("demo");
        return function test(){ 
        console.log("test");
        }
    }  
}  
sample()()(); //calling function inside function
var value=sample();
value();            
//return only performs once 
//anonymous function : a function without a name
//date method in next class
setInterval(()=>{console.log("hello")},2000); //prints hello every 2 seconds
setTimeout (()=>{
    console.log("hi");
},5000);
//self invoking function
//study this later
//self invoking function (iife - immediately invoked function expression) is a function that runs as soon as it is defined
// syntax: (function() {
// function body
//})();
//advantages of iife ( self invoking function ): 1.to obtain data privary 
//2. dont give access to call anywhere 
