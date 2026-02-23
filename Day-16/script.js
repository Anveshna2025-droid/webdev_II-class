console.log("first line")
setTimeout(()=>
console.log("inside timeout")
,0)
const p=new Promise((resolve, reject) => {
    resolve()
})
p.then(()=>{
    console.log("inside promise")
})

const p2= new Promise((resolve, reject) => {
     resolve()
})
p2.then(()=>{
    console.log("inside promise2")
})
console.log("last line")
//====================================

//call stack - place where javascript keeps track of function
//web apis - tool on browser engine , wb application programing interface, tools provides by browers to preform asynchronous task.
//handles setTimeout , fetch , addEventlistener , 
//task queue
// event loop - checks call stack and task queue, if call stack is empty it pushes the first task from task queue to call stack.

