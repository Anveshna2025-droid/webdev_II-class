// console.log("start....");
// function myFunction(){
//     setTimeout(()=>{
//     console.log("Hello world");
//     },5000);
// }
// myFunction();
// console.log("end....")

// console.log("start....");
// function myFunction(cb){
//     setTimeout(()=>{
//         //return 'hello world';
//     cb("Hello world");
//     },5000);
// }
// myFunction((data)=>{
//     console.log(data);
// });
// console.log("end....")


console.log("start....");
function login(uname,password,cb){
    setTimeout(()=>{
        cb({uname:uname, isLoggedIn:true,Message: "Login Successfull"});
    },1000);
}
function getVideoList(email,cb){
   setTimeout(()=>{
    cb([{title:"video 1"},{title:"video 2"}]);
   },2000);}
   login("john@gmail.com","password123",(usderdata)=>{
    console.log(userdata);
    getVideoList(userdata.uname),(videoList)=>{
        console.log(videoList);
    }
   });