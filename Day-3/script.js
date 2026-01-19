// //reverse and array using while loop , push and pop
// let array = [1, 2, 3, 4, 5];
// let reverse=[];
// while(array.length>0){
//     reverse.push(array.pop());
// }
// console.log(reverse);
// //remove all -ve numbers from an array
// let array1 = [1, 2, 3, 4, -9, 5, -1, -2, -4 , 78, -33, 0, 12];
// let positive_int = [];
// while(array1.length>0){
//     let element = array1.pop();
//     if(element > 0){
//         positive_int.push(element);
//     }
// }
// console.log(positive_int);
// //remove all -ve numbers from an array using shift and unshift
// let array2 = [1, 2, 3, 4, -9, 5, -1, -2, -4 , 78, -33, 0, 12];
// let positive_int2 = [];
// while(array2.length>0){
//     let element=array2.shift();
//     if(element>0){
//         positive_int2.unshift(element);
//     }
// }
// console.log(positive_int2);
// //practice set
// let pracarr=[8,9,45,78,34,56];
// let revpracarr=[];
// while(pracarr.length>0){
//     revpracarr.push()
//     revpracarr.push(pracarr.pop());
// }
// console.log(revpracarr);
// //checking if an array is palindrome or not
// let palinarr=[1,2,3,3,2,1]
//new
// let arr=[1,2,3,2,1];
// let original=[];
// let reversed=[];
// //push given array into original array
// for(let i=0;i<arr.length;i++){
//     original.push(arr[i]);
// }
// //reverse the array using pop and push
// while(arr.length>0){
//     reversed.push(arr.pop());
// }  
// //compare original and reversed array
// for(let i=0;i<original.length;i++){
//     if(original[i]!==reversed[i]){
//         console.log("The array is not palindrome");
//         console.log("not a palindrome");
//     }
// }
// console.log("The array is palindrome");
// let arr=[1,2,3,2,1,4];
// let original=[];
// let reversed=[];
// //push given array into original array
// for(let i=0;i<arr.length;i++){
//     original.push(arr[i]);
// }
// //reverse the array using pop and push
// while(arr.length>0){
//     reversed.push(arr.pop());
// }  
// //compare original and reversed array
// for(let i=0;i<original.length;i++){
//     if(original[i]!==reversed[i]){
//         console.log("The array is not palindrome");
//         console.log("not a palindrome");
//     }
// }
// console.log("The array is palindrome");
// //code not optimized , take a function to optimize it
function palindrome(){
    let arr=[1,2,3,2,1];
let original=[];
let reversed=[];
//push given array into original array
for(let i=0;i<arr.length;i++){
    original.push(arr[i]);
}
//reverse the array using pop and push
while(arr.length>0){
    reversed.push(arr.pop());
}  
//compare original and reversed array
for(let i=0;i<original.length;i++){
    if(original[i]!==reversed[i]){
      return"not a palindrome";
    }
}
return(" palindrome");
}
console.log(palindrome());
//why we use let instead of var ?
//Ans: let is block scoped and var is function scoped , so using let we can avoid variable hoisting and redeclaration issues.
//let can be updated but not redeclared in the same scope , whereas var can be redeclared and updated.
//for pushing repo into git 
//git init
//git add .
//git commit -m "initial commit"
//git branch -M main
//git remote add origin <repo link>
//git push -u origin main
//to check git status
//git status
//to see commit logs
//setTimeout and setInterval
setTimeout(()=>{
    console.log("This is a message after 3 seconds");
},3000);
   