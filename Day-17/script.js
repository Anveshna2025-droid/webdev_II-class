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

function pro(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res();
        },1000)
    })
    .then(()=>console.log("resolved"))
}
console.log(pro());