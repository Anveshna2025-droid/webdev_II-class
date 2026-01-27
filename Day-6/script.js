// console.log("Day 6 file loaded");
// //what is object in javascript ?
// //object is a collection of key value pairs
// //how to create an object ?
// //syntax : let obj_name={ key1:value1, key2:value2, ...};
// //methods are functions which are properties of an object
// //api: is a set of functions and procedures that allow the creation of applications that access the features or data of an operating system, application, or other service.
// //api is in json format
// //json : javascript object notation
// let user={
//     name:"sp acharya",
//     address:"gurugram",
//     mobileno:1234567890,
//     favcolor:["black","white","blue"],
//     demo:function(){
//     return "demo";
// }
// }
// console.log(user);
// console.log(user.name);
// console.log(user.favcolor[2]);

// //this is a demo function 
// //why didnt we use console here ??
// //this is a demo function
// //we used this to prin the specific key value pair
// console.log("my name is " +user.name+".my fav colour is " +user.favcolor[1],user.demo());
// //console.log(`my name is  ${user.name}.my fav colour is  ${user.favcolor[1]}`);
// //${} is used to insert variables in a string template literal
// //string literal : is a way to define a string using backticks ``
// //why we use object : to group related data together
// // to repesent a real world entity
// // to keep code neat and organized
// //1.Object.keys(variable name):
// console.log(Object.keys(user));
// console.log(Object.values(user));
// //array is an object , so if you fo type of array , is will be a onject
// //prototype is asked in interviews 
// console.log(Object.entries(user))
//shows key value pairs 
//methods ka use case yaad rakho , practice well
// [
//     ["x","o","x"],
//     ["o","x","o"],
//     ["x","o","o"]
// ]
//question find the winner 
//3 test cases : row wise , column wise , diaginal wise
const car = { 
    make: "Mahindra", 
    model: "Thar" 
};
Object.freeze(car);
car.model="XUV700"
//Object.freeze(car);
Object.seal(car)
car.color = "Black"; 
console.log(car);