// let pro = new Promise((resolve,reject)=>{
//     let a=10;
//     if(a>50){
//         resolve()
//     }
//     else{
//         reject()
//     }
// })
// pro
// .then(()=>console.log("promise resolved"))
// .catch((err)=>console.error(err,"promise rejected"));

// function pro(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res();
//         },1000)
//     })
//     .then(()=>console.log("resolved"))
// }
// console.log(pro());



//promise chaining: when we use multiple .then method to achieve the task or result.

//in callback hell we did the same task but the code is hard to debug and structure is not good

// function pro(num){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log(num);
//             res();
//         },1000)
//     })
// }
// pro(1)
// .then(()=>pro(2))
// .then(()=>pro(3))
// .then(()=>pro(4))
// .then(()=>pro(5))
// .catch(()=>console.log("error"))


//disadvantages : to perform certain task we need to call a callback function multiple times . more functions for smaller task means more complexity and time for executuion and function call will be more .


function pro(num){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(num);
            res();
        },1000)
    })
}
 let prores=Promise.resolve();
 
 for(let i=1;i<=5;i++){
     prores=prores.then(()=>pro(i))
 }

 