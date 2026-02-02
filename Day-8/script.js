// today we wil start DOM
//DOM Keypoints for interview answering -  structure and content of a web page,
//manipulate, and update the content of a web document
// The DOM is a programming interface for web documents. It provides a structured representation of a web page’s elements and content, treating them as objects that can be accessed, manipulated, and modified using programming languages like JavaScript. The DOM represents the document as a tree of objects, where each object corresponds to a part of the web page.
const heading =document.getElementById("myHeading");
console.log(heading);
heading.textContent="hello india";
//page reload krne time ek baar helloworld aaega for hello indoa and elements me inspect krne time bhi sirf hello india hi dekhega
heading.style.color="tomato";
heading.style.backgroundColor="yellow";

const heading1 =document.getElementById("anvheading");
console.log(heading1);
heading1.style.color="brown";
heading1.style.backgroundColor="lightblue";

const para =document.getElementsByClassName("para");
console.log(para)
// para.style.backgroundColor="cyan";
//wont work
//why? cuz this is an array
for(let i=0;i<para.length;i++){
    para[2].style.backgroundColor="cyan";
}
//class name ko target krne ke liye for lopp ka hi use krenge cuz usko ek aaray ki store kiya jaata hai 
const new1=document.getElementsByClassName("new");
console.log(para)
for(let i=0;i<new1.length;i++){
    new1[i].style.backgroundColor="lime";
}

//querySelector(selector)
// Description: Retrieves the first element that matches the specified CSS selector.

// #content p this is decendent selector
const qs=document.querySelector("#content p")
console.log(qs)
qs.textContent="hhfuhruehjffh"

