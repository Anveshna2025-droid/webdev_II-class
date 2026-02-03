console.log("hello world!");
const Task1=document.getElementById("profile");
console.log(profile);
profile.style.backgroundColor="#f6a1ec ";
profile.style.padding="15px";
profile.style.textAlign="center";
//jo const ke aage hoga , vahi length aur aage jaega loop me ,not the name given to it 
 const para=document.getElementsByClassName("demo");
 console.log(para)
 for(let i=0;i<para.length;i++){
    // para[i].style.color="red";
    para[i].style.fontSize="40px";
 }
 console.log(para.length);
 for(let i=0;i<para.length;i++){
    if(i%2==0){
        para[i].style.color="green";
    }
    else{
        para[i].style.color="red";
    }

 }

//task-3
const content=document.getElementById("content");
const task3= content.querySelectorAll("p")
for(let i=0;i,task3.length;i++){
    task3[i].style.backgroundColor="cyan";
}

