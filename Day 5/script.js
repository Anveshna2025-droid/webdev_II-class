// console.log("Hello, World!");
// //string method in javascript
// // slice(start , end)
// let str="Hi javascript";
// let res=str.slice(0,7);
// console.log(res); 
// //we start counting from 1 , but the index starts from 0
// //substring(start , end)
// let res1=str.substring(0,7);
// console.log(res1);
//substring method does not accept negative index
example_string="Hello World";
let res2=example_string.substr(-9,1);
console.log(res2);
//logic : starts from index -9 and takes 5 characters
let strjav="javascript is amazing";
let res3=strjav.substring(4,-7);
console.log(res3);
//logic : it will consider 0 in place of -7 and starts from index 0 to index 4
//toUpperCase() and toLowerCase()
let strcase="Hello World";
let res4=strcase.toUpperCase();
console.log(res4);
let res5=strcase.toLowerCase();
console.log(res5);
//what happens here ? 
//it changes the str to uppercase and lowercase but does not change the original string
//concat method
//trim method : removes whitespace from both ends of a string
//issue aapka console se pata chal jayega agar aap projects me stuck horre ho and error aara hai 
//start reving javascript 
//charAt: returns index of character at specified position
//split method : splits a string into an array of substrings
let sentence =" I,am,a,comma,separated,sentence ";
let words=sentence.split(",");
console.log(words);
//what happens here ?
//it splits the sentence at each comma and returns an array of substrings
//what is you add space instead of comma ?
let words1=sentence.split(" ");
console.log(words1);
//it splits the sentence at each space and returns an array of substrings
//now lets remove a's from the sentence
let words2=sentence.split("a");
console.log(words2);
//it splits the sentence at each 'a' and returns an array of substrings
console.log(sentence.length);
////question : find out the occurance of r in the given string 
let questr="tu meri me tera me tera tu meri "
let arr=questr.split("r");
console.log(arr.length-1);
//why do you add the -1 here ? : because the split method returns an array with one more element than the number of occurrences of the delimiter, so we subtract 1 to get the actual count of occurrences
//why split method returns an extra element?
//because when the string is split, it creates substrings before and after each occurrence of the delimiter, resulting in one additional substring at the end
//on spliting we get : ["tu me i me te a tu me i "]
//self invoking function 
//syntax : (function(){ //code })();
//uses : data privacy , avoid polluting global scope
//if i want to convert it into arrow function
// (()=>{ //code })();();
//example :
(function(){
    console.log("This is a self invoking function");
})();   
(()=>{
    console.log("This is a self invoking arrow function");
})();
//why use self invoking function ?
//to create a private scope for variables and functions, preventing them from polluting the global namespace
//next class me how java script works in java script engnine



