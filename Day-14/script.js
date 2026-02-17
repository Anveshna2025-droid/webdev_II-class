// // syntax for Promise
// //promises are smart organisation of call back functions
// //importan for interviews
// let myPromise=new Promise((res,rej)=>{
//     let data = "this is data"
//     if(data){
//         res(data);
//     } else{
//         rej("error")
//     }
    
// });
// myPromise.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });
// console.log(myPromise);




//fetch function - usedto fetch data from an api
//you handle promise by using .then
// let resp=fetch("https://jsonplaceholder.typicode.com/todos/1")
// resp.then((robj)=>{
//     console.log(robj);
//     console.log(robj.json());
// })
// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then((robj)=>{
//     robj.json().then((data)=>{
//         console.log(data);
//     });
   
// })


fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(robj=>{
    return robj.json();
})
.then(data=>{
        console.log(data);
    })
    .catch(err=>{
        console.log(err);
    })
   